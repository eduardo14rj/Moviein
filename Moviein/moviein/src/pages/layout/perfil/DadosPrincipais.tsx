import React, { useEffect, useState } from "react";
import Api from "../../../api/api";
import { MdImage } from "react-icons/md";
import Input from "../../../components/Input/Input";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/Button";


const useSchreema = yup.object({
    nome: yup.string(),
    email: yup.string(),
    thumb: yup.string()
})

type use = yup.InferType<typeof useSchreema>;

const DadosPrincipais: React.FC = () => {
    const { register, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(useSchreema)
    })
    useEffect(() => {
        async function loadPerfil() {
            var user = await Api.get<use>("api/usuario/get");
            console.log(user.data)
            setValue("nome", user.data.nome)
            setValue("email", user.data.email)
        }

        loadPerfil();
    }, [])

    return (
        <>
            <div className="w-full grid grid-cols-2 px-8">
                <div>
                    <div className="mt-10 flex justify-center relative">
                        <img src="https://picsum.photos/200/300" className="w-[180px] h-[180px] rounded-full" />
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
                            <Button titulo="Deslogar"
                                color="outline-white"
                                className="w-full" />
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