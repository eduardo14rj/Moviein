import React, { useEffect } from "react";
import Api from "../../../api/api";
import Input from "../../../components/Input/Input";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/Button";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogHeader,
    DialogFooter,
    DialogClose
} from '../../../components/ui/dialog';
import ModalThumbnail from "../../../components/Modals/ModalThumbnail/ModalThumbnail";

const useSchreema = yup.object({
    nome: yup.string(),
    email: yup.string(),
    thumb: yup.string()
})

type use = yup.InferType<typeof useSchreema>;

const DadosPrincipais: React.FC = () => {
    const { register, setValue, formState: { errors }, watch } = useForm({
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
            setValue("thumb", user.data.thumb);
        }
        loadPerfil();
    }, [setValue])

    return (
        <>
            <div className="w-full grid grid-cols-2 px-8 gap-8">
                <div>
                    <div className="mt-10 flex justify-center relative">
                        {
                            (watch("thumb") === undefined || watch("thumb") === null) ? (
                                <img alt="avatar" src="https://picsum.photos/200/300" className="w-[180px] h-[180px] rounded-full" />
                            ) : (
                                <img alt="avatar" src={watch("thumb")} className="w-[180px] h-[180px] rounded-full" />
                            )


                        }
                        <div className="absolute bottom-[-20px] z-10">
                            <ModalThumbnail thumb={watch("thumb")}
                                setValue={setValue}
                                email={watch("email")} />
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
                                    </DialogHeader>
                                    {/* <DialogDescription>
                                        </DialogDescription> */}
                                    Deseja mesmo deslogar da conta?
                                    <DialogFooter>
                                        <DialogClose>
                                            <Button
                                                titulo="Fechar"
                                                color="outline-white"
                                            />
                                        </DialogClose>
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