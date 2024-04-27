import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import tokenService from "../services/tokenService";

function Auth(req: FastifyRequest, re: FastifyReply, done: HookHandlerDoneFunction, ) {
    const authBearer = req.headers.authorization;

    if (!authBearer) {
        re.code(401).send({ erro: "Token Inválido" })
        return;
    }

    const token = authBearer.split(" ")[1];
    const tokenDesc = tokenService.descript(token);
    
    req.user = {
        exp: tokenDesc.exp,
        funcao: tokenDesc.funcao,
        usuarioId: tokenDesc.usuarioId
    }
    done();
}

export default Auth;