import { FastifyReply, FastifyRequest } from 'fastify';
import RegisterUserDTO_Req from '../DTOs/RegisterUserDTO_Req';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaClient } from '../server';


export class UserController {
  async ListarUsuarios(req: FastifyRequest, res: FastifyReply) {
    const users = await prismaClient.usuario.findMany();
    return res.code(200).send(users);
  }

  async RegistrarUsuario(req: FastifyRequest, res: FastifyReply) {
    var data = req.body as RegisterUserDTO_Req;

    if (data.dataNascimento && typeof data.dataNascimento === 'string') {
      data.dataNascimento = new Date(data.dataNascimento).toISOString();
    }

    try {
      await prismaClient.usuario.create({
        data: {
          email: data.email,
          senha: data.senha,
          funcao: "cliente",
          nome: data.nomeCompleto,
          usuarioInformacao: {
            create: {
              bairro: data.bairro,
              cep: data.cep,
              cidade: data.cidade,
              complemento: data.complemento,
              cpf: data.cpf,
              dataNascimento: data.dataNascimento,
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
  }

  async login(req: FastifyRequest, res: FastifyReply) {
    const { email, senha } = req.body as LoginDTO_Req

    var user = await prismaClient.usuario.findUnique({
      where: {
        email: email
      }
    });

    if (user === null)
      return res.status(400).send({ mensagem: "Usuário com esse email não encontrado." });

    if (user.senha !== senha)
      return res.status(400).send({ mensagem: "Senha inválida." });

    return res.status(200).send({
      token: "1234sdsa",
      funcao: "cliente"
    });
  }
}