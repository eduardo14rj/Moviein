import { FastifyPluginCallback } from 'fastify';
import RegisterUserDTO_Req from '../models/DTOs/RegisterUserDTO_Req';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaClient } from '../server';
import MD5 from "crypto-js/md5";
import TokenService from '../services/tokenService';
import Auth from '../middlewares/Auth';
import SendEMailService from '../services/SendEmailService';
// import { sendError, sendSuccess } from '../middlewares/Send'

const UserController: FastifyPluginCallback = (instance, opts, done) => {

  instance.post("login", {}, async (req, res) => {
    const { email, senha } = req.body as LoginDTO_Req

    var user = await prismaClient.usuario.findUnique({
      where: {
        email: email
      }
    });

    if (user === null)
      return res.badRequest("Usuário com esse email não encontrado.");

    var senhaEncr = MD5(senha).toString();
    if (senhaEncr !== user.senha)
      // return sendError(res, "Senha inválida", 400);
      return res.badRequest("Senha inválida");

    var token = TokenService.encript(user.email, user.funcao);

    var response = {
      token: token.token,
      funcao: token.funcao,
      expiracao: token.expiracao
    }

    return res.ok(response);
  });

  instance.get("listar", async (req, res) => {
    const users = await prismaClient.usuario.findMany();
    console.log(res);
    // return res.code(200).send(users);
    return res.ok(users);
  });


  instance.post("registro", async (req, res) => {
    var data = req.body as RegisterUserDTO_Req;
    var senhaEncr = MD5(data.senha).toString();

    try {
      await prismaClient.usuario.create({
        data: {
          email: data.email,
          senha: senhaEncr,
          funcao: "cliente",
          nome: data.nomeCompleto,
          usuarioInformacao: {
            create: {
              bairro: data.bairro,
              cep: data.cep,
              cidade: data.cidade,
              complemento: data.complemento,
              cpf: data.cpf,
              dataNascimento: new Date(data.dataNascimento).toISOString(),
              estado: data.estado,
              genero: data.genero,
              nomeMaterno: data.nomeMaterno,
              numero: data.numero,
              pais: data.pais,
              telefone: data.telefone
            }
          }
        }
      })
      return res.status(200).send()

    } catch (error) {

      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        return res.status(400).send({
          message: 'Já existe um usuário criado com esse email.',
        });
      }
      return res.status(400).send({
        ErrorMessage: error
      });

    }
  });


  instance.get("get", { preHandler: Auth }, async (req, res) => {
    const usuario = await prismaClient.usuario.findFirst({
      where: {
        email: req.user.email
      }
    });
    if (usuario != null) {
      const response = {
        nome: usuario.nome,
        email: usuario.email,
        thumb: usuario.thumb,
        auth2: usuario.Auth2
      }

      return res.ok(response);
    }
  });

  instance.post("updateThumb", { preHandler: Auth }, async (req, res) => {
    const { thumb } = req.body as ThumbnailDTO_Req;
    const usuario = await prismaClient.usuario.findFirst({
      where: {
        email: req.user.email,
      }
    });
    if (usuario == undefined)
      // return sendError(res, "Usuário não encontrado.", 400)
      return res.badRequest("Usuário não encontrado.")

    await prismaClient.usuario.update({
      where: { email: req.user.email },
      data: {
        thumb: thumb
      }
    })
  });


  instance.post("resetPasswordCode", async (req, res) => {
    const { email } = req.body as { email: string }

    const randomNumber = Math.floor(10000 + Math.random() * 90000);

    var usuario = await prismaClient.usuario.findFirst({
      where: {
        email: email
      }
    })
    if (usuario == undefined)
      return res.badRequest("Usuário com esse email não encontrado.");

    await SendEMailService.Enviar({
      conteudo: `Seu código de redefinição de senha é: <b>${randomNumber}</b>`,
      email: email,
      titulo: "Moviein: Código de redefinição de senha."
    });

    return res.ok({ code: randomNumber.toString() });
  })

  instance.post("resetPassword", async (req, res) => {
    const { senha, email } = req.body as RedefinirSenhaDTO_Req
    const usuario = await prismaClient.usuario.findFirst({
      where: {
        email: email
      }
    });
    if (usuario === null)
      return res.code(400).send("Usuário não encontrado.");

    var novaSenha = MD5(senha).toString();

    try {
      await prismaClient.usuario.update({
        where: {
          email: email
        },
        data: {
          senha: novaSenha
        }
      });
      return res.ok(undefined, "Senha redefinida com sucesso")
    } catch (error) {
      return res.code(400).send(error);
    }
  })


  instance.get("toggleAuth2", { preHandler: Auth }, async (req, res) => {
    const usuario = await prismaClient.usuario.findFirst({
      where: {
        email: req.user.email!
      }
    })
    if (usuario != undefined) {
      await prismaClient.usuario.update({
        where: {
          email: usuario.email
        },
        data: {
          Auth2: !usuario.Auth2
        }
      })

      return res.ok(null);
    }
  })

  done();
}

export default UserController;