import React from "react";
import film from '../../assets/filme.png';
import { Outlet, useNavigate } from "react-router-dom";
import { IconBase, IconType } from "react-icons";
import { MdArrowBack } from "react-icons/md";

type MenuItemPerfilType = {
    path: string
    titulo: string
}

const SidebarPerfil: React.FC = () => {
    const nav = useNavigate();
    const MenuItemPerfil: React.FC<MenuItemPerfilType> = (i) => {
        return (
            <div className="p-4 cursor-pointer pr-8" onClick={() => nav(i.path)}>
                <p className="text-white text-right">{i.titulo}</p>
            </div>
        )
    }

    return (
        <>
            <img src={film} className="w-screen h-[60px] object-cover" />
            <div className="flex">
                <div className="w-[50vh] bg-[#00000070] h-[calc(100vh-60px)]">

                    <MenuItemPerfil
                        path="/a/perfil/dadosPrincipais"
                        titulo="Dados principais" />

                    <MenuItemPerfil
                        path="/a/perfil/meusVideos"
                        titulo="Meus vídeos" />

                </div>
                <div className="w-[50vh] h[calc(100vh-60px)]">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default SidebarPerfil;