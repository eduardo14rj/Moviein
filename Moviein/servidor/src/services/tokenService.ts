import moment from "moment";
import jwt from 'jsonwebtoken';

export interface tokenModel {
    funcao: string,
    usuarioId: number,
    exp: number

    token?: string
}

export default class tokenService {
    private static tokenKey: string = "a53b7ba2-d649-48df-88af-e4b86f6b0724";

    public static descript(token: string): tokenModel {

        var decoded = jwt.verify(token, this.tokenKey, {
            ignoreExpiration: true
        });
        var decodedResponse = decoded as tokenModel;
        return decodedResponse;
    }

    public static encript(usuarioId: number, funcao: string): tokenModel {

        var exp = moment().add(30, "days");
        var seconds_diff = exp.diff(moment(), "seconds");

        var token = jwt.sign({
            funcao: funcao,
            usuarioId: usuarioId,
            exp: seconds_diff
        }, this.tokenKey);

        return {
            exp: seconds_diff,
            funcao: funcao,
            usuarioId: usuarioId,
            token: token
        };
    }
}