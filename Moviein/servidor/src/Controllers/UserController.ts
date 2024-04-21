import { PrismaClient } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import RegisterUserDTO_Req from '../DTOs/RegisterUserDTO_Req';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaClient } from '../server';

export const UserController = (app: FastifyInstance) => {

  app.get("/users", async () => {
    const users = await prismaClient.usuario.findMany();
    return { users };
  });


  app.post("/api/user/register", async (req, res) => {
    var data = req.body as RegisterUserDTO_Req;

    if (data.dataNascimento && typeof data.dataNascimento === 'string') {
      data.dataNascimento = new Date(data.dataNascimento).toISOString();
    }

    try {
      await prismaClient.usuario.create({
        data: {
          Email: data.email,
          Senha: data.senha,
          Funcao: "cliente",
          Nome: data.nomeCompleto,
          UsuarioInformacao: {
            create: {
              Bairro: data.bairro,
              Cep: data.cep,
              Cidade: data.cidade,
              Complemento: data.complemento,
              Cpf: data.cpf,
              DataNascimento: data.dataNascimento,
              Estado: data.estado,
              Genero: data.genero,
              NomeMaterno: data.nomeMaterno,
              Numero: data.numero,
              Pais: data.pais,
              Telefone: data.telefone
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
  })


  app.post("/api/user/login", async (req, res) => {
    const { email, senha } = req.body as LoginDTO_Req

    var user = await prismaClient.usuario.findUnique({
      where: { 
        Email: email
      }
    });

    if (user === null)
      return res.status(400).send({ mensagem: "Usuário com esse email não encontrado." });

    if (user.Senha !== senha)
      return res.status(400).send({ mensagem: "Senha inválida." });

    return res.status(200).send({
      token: "1234sdsa",
      funcao: "cliente"
    });
  })

}