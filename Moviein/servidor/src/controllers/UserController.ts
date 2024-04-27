import { FastifyPluginCallback } from 'fastify';
import RegisterUserDTO_Req from '../models/DTOs/RegisterUserDTO_Req';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaClient } from '../server';
import MD5 from "crypto-js/md5";
import TokenService from '../services/tokenService';
import Auth from '../middlewares/Auth';

const UserController: FastifyPluginCallback = (instance, opts, done) => {

  instance.post("login", {}, async (req, res) => {
    const { email, senha } = req.body as LoginDTO_Req

    var user = await prismaClient.usuario.findUnique({
      where: {
        email: email
      }
    });

    if (user === null)
      return res.status(400).send({ mensagem: "Usuário com esse email não encontrado." });

    var senhaEncr = MD5(senha).toString();
    if (senhaEncr !== user.senha)
      return res.status(400).send({ mensagem: "Senha inválida." });

    var token = TokenService.encript(user.id, user.funcao);

    return res.status(200).send({
      token: token.token,
      funcao: token.funcao,
      exp: token.exp
    });

  });

  instance.get("listar", { preHandler: Auth} , async (req, res) => {
    const users = await prismaClient.usuario.findMany();
    return res.code(200).send(users);
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

  done();
}

export default UserController;