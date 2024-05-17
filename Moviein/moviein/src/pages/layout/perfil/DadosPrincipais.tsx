import React, { useContext, useEffect, useState } from "react";
import Api from "../../../api/api";
import Input from "../../../components/Input/Input";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/Button";
import ModalThumbnail from "../../../components/Modals/ModalThumbnail/ModalThumbnail";
import { Skeleton } from "components/ui/skeleton";
import ModalDesconectar from "components/Modals/ModalThumbnail/ModalDesconectar/ModalDesconectar";
import UserContext, { UseContextType } from "context/UserContext";

const DadosPrincipais: React.FC = () => {
    // const { register, setValue, formState: { errors }, watch } = useForm({
    //     resolver: yupResolver(UseContextSchreema)
    // })
    const { thumb, email, setValueUser, watchUser, reload, errorUser, registerUser } = useContext(UserContext)
    const [load, setLoad] = useState<boolean>(true);

    // async function loadPerfil() {
    //     setLoad(true);
    //     var user = await Api.get<UseContextType>("api/usuario/get");
    //     setValue("nome", user.data.nome)
    //     setValue("email", user.data.email)
    //     setValue("thumb", user.data.thumb);
    //     setLoad(false);
    // }

    useEffect(() => {
        console.log(email)
        if (email === undefined) {
            setLoad(true)
        } else {
            setLoad(false)
        }
    }, [email])

    // useEffect(() => {
    //     async function perfil() {
    //         setLoad(true);
    //         var user = await Api.get<UseContextType>("api/usuario/get");
    //         setValue("nome", user.data.nome)
    //         setValue("email", user.data.email)
    //         setValue("thumb", user.data.thumb);
    //         setLoad(false);
    //     }
    //     perfil();
    // }, [setValue])

    return (
        <>
            <div className="w-full grid grid-cols-2 px-8 gap-8">
                <div>
                    <div className="mt-10 flex justify-center relative">
                        {
                            load ? (
                                <Skeleton className="w-[189px] h-[180px] rounded-full" />
                            ) : (
                                <>
                                    {
                                        (thumb === undefined || thumb === null) ? (
                                            <img alt="avatar" src="https://picsum.photos/200/300" className="w-[180px] h-[180px] rounded-full" />
                                        ) : (
                                            <img alt="avatar" src={thumb} className="w-[180px] h-[180px] rounded-full" />
                                        )
                                    }
                                    <div className="absolute bottom-[-20px] z-10">
                                        <ModalThumbnail thumb={thumb}
                                            setValue={setValueUser}
                                            email={thumb}
                                            reloadPerfil={reload} />
                                    </div>
                                </>
                            )
                        }

                    </div>

                    <div>

                        {
                            load ? (
                                <>
                                    <div className="flex flex-col space-y-4 mt-4">
                                        <Skeleton className="w-[full] h-[64px] " />
                                        <Skeleton className="w-[full] h-[64px]" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Input<UseContextType> Titulo="Nome"
                                        field="nome"
                                        Disable
                                        register={registerUser!}
                                        fieldErrors={errorUser!} />
                                    <Input<UseContextType> Titulo="Email"
                                        field="email"
                                        Disable
                                        register={registerUser!}
                                        fieldErrors={errorUser!} />
                                </>
                            )
                        }

                        <div className="my-5">
                            <Button titulo="Redefinir senha"
                                className="w-full" />
                        </div>
                        <div>
                            <ModalDesconectar />
                        </div>
                    </div>

                </div>
                <div>
                    <div className="mt-10 relative h-[60vh] flex items-center p-10 w-full border-[1px] border-white/35 rounded-[20px] overflow-hidden">
                        <div className="absolute top-[-60px] right-[-60px] opacity-45 w-[200px] h-[200px] bg-white rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[-60px] left-[-60px] opacity-45 w-[200px] h-[200px] bg-white rounded-full blur-[100px]"></div>

                        <div className="flex flex-col gap-4 text-center">
                            <h3 className="text-[20px]">Atualmente você não possui nenhuma assinatura</h3>
                            <Button color="outline-white"
                                titulo="Comprar uma assinatura" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default DadosPrincipais;