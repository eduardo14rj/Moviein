import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import cors from '@fastify/cors'; // Importe o módulo 'cors' diretamente

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

const app = fastify();

// Registre o plugin fastify-cors com a configuração origin como true para aceitar solicitações de qualquer origem
app.register(cors, {
  origin: true
});

app.get("/users", async () => {
    const users = await prisma.user.findMany();
    return { users };
});

app.get("/user/register", async (req, res) => {
    await prisma.user.create({
        data: {
            email: "teste@gmail.com",
            role: "Admin",
            name: "Eduardo"
        }
    });
    return res.status(201).send();
});

app.listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3001,
    host: "0.0.0.0"
}).then(() => {
    console.log("Servidor rodando em porta:", `http://localhost: ${process.env.PORT ? Number(process.env.PORT) : 3001}`);
});
