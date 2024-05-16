import React, { useEffect } from "react";
import Api from "../../../api/api";
import { MdImage } from "react-icons/md";
import Input from "../../../components/Input/Input";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
    DialogHeader,
    DialogFooter
} from '../../../components/ui/dialog';

const useSchreema = yup.object({
    nome: yup.string(),
    email: yup.string(),
    thumb: yup.string()
})

type use = yup.InferType<typeof useSchreema>;

const DadosPrincipais: React.FC = () => {
    const { register, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(useSchreema)
    })

    function desconectar() {
        localStorage.clear();
    }

    useEffect(() => {
        async function loadPerfil() {
            var user = await Api.get<use>("api/usuario/get");
            setValue("nome", user.data.nome)
            setValue("email", user.data.email)
        }

        loadPerfil();
    }, [setValue])

    return (
        <>
            <div className="w-full grid grid-cols-2 px-8">
                <div>
                    <div className="mt-10 flex justify-center relative">
                        <img alt="avatar" src="https://picsum.photos/200/300" className="w-[180px] h-[180px] rounded-full" />
                        <div className="absolute bottom-[-20px]">
                            <button className="w-[42px] flex justify-center items-center h-[42px] rounded-full bg-primary">
                                <MdImage />
                            </button>
                        </div>
                    </div>

                    <div>
                        <Input<use> Titulo="Nome"
                            field="nome"
                            Disable
                            register={register}
                            fieldErrors={errors} />
                        <Input<use> Titulo="Email"
                            field="email"
                            Disable
                            register={register}
                            fieldErrors={errors} />
                        <div className="my-5">
                            <Button titulo="Redefinir senha"
                                className="w-full" />
                        </div>
                        <div>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button titulo="Deslogar"
                                        color="outline-white"
                                        className="w-full" />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Desconectar?</DialogTitle>
                                        <DialogDescription>
                                            Deseja mesmo deslogar da conta?
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <DialogTrigger>
                                            <Button
                                                titulo="Fechar"
                                                color="outline-white"
                                            />
                                        </DialogTrigger>
                                        <Button
                                            titulo="Sair da plataforma"
                                            color="red"
                                            onClick={() => desconectar()}
                                        />
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                </div>
                <div>
                    mundo
                </div>
            </div>
        </>
    )
}


export default DadosPrincipais;