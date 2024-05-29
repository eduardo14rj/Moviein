import { FastifyReply } from 'fastify';

export const sendSuccess = (res: FastifyReply, data: any, message = 'Success') => {
  res.status(200).send({
    status: 'success',
    message,
    data,
  });
};

export const sendError = (res: FastifyReply, error: string, statusCode = 400) => {
  res.status(statusCode).send({
    status: 'error',
    message: typeof error === 'string' ? error : error,
    data: undefined
  });
};