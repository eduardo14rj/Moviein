import { PrismaClient } from '@prisma/client';
import {FastifyInstance} from 'fastify';

export const UserController = (app: FastifyInstance, prisma: PrismaClient) => {

    app.get("/users", async () => {
        const users = await prisma.user.findMany();
        return { users };
      });

}