import fastify, { FastifyReply } from "fastify";
import { PrismaClient } from "@prisma/client";
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import cors from '@fastify/cors';
import UserController from "./controllers/UserController";
import UserAuthorizationModel from "./models/UserAuthorizationModel";

declare module 'fastify' {
  interface FastifyRequest {
    user: UserAuthorizationModel
  }

  interface FastifyReply {
    ok: (data: any, message?: string) => void;
    badRequest: (message: string, data?: any, statusCode?: number) => void;
  }
}

const connectionString = "postgres://dvlvctun:u1gQQ6T2PxiVXJAl1hA1GcjkWA-81PZv@kesavan.db.elephantsql.com/dvlvctun"
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
export const prismaClient = new PrismaClient({ adapter })

const app = fastify();

app.decorateReply('ok', function (this: FastifyReply, data: any, message?: string) {
  this.status(200).send({ statusCode: 200, message, data: data ?? null });
});

app.decorateReply('badRequest', function (this: FastifyReply, message: string, data?: any, statusCode?: number) {
  this.status(statusCode ?? 400).send({ statsusCode: statusCode ?? 400, message, data });
});

app.register(cors, { origin: true });

//controllers
app.register(UserController, { prefix: "/api/usuario/" })
//

app.listen({
  port: process.env.PORT ? Number(process.env.PORT) : 3001,
  host: "0.0.0.0"
}).then(() => {
  console.log("Servidor rodando em porta:", `http://localhost:${process.env.PORT ? Number(process.env.PORT) : 3001}`);
});
