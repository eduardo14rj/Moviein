import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

function Auth(req: FastifyRequest, re: FastifyReply, done: HookHandlerDoneFunction){
    console.log("PreHandler ???");
    done();
}

export default Auth;