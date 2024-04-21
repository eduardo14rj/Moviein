import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import cors from '@fastify/cors'; // Importe o módulo 'cors' diretamente
import { UserController } from "./Controllers/UserController";

const connectionString = "postgres://dvlvctun:u1gQQ6T2PxiVXJAl1hA1GcjkWA-81PZv@kesavan.db.elephantsql.com/dvlvctun"
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
export const prismaClient = new PrismaClient({ adapter })

const app = fastify();

// Registre o plugin fastify-cors com a configuração origin como true para aceitar solicitações de qualquer origem
app.register(cors, {
  origin: true
});

UserController(app)

app.listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3001,
    host: "0.0.0.0"
}).then(() => {
    console.log("Servidor rodando em porta:", `http://localhost:${process.env.PORT ? Number(process.env.PORT) : 3001}`);
});
