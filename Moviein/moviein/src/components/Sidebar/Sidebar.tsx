import UserContext from "context/UserContext";
import React, { useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Sidebar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const {nome, thumb}= useContext(UserContext)
    const nav = useNavigate();

    return (
        <>
            {
                open ? (
                    <>
                        <div className="h-screen shadow-xl fixed p-4 left-0 w-[50vh] bg-white dark:bg-card z-[100]" onClick={() => setOpen(true)}>
                            <div className="flex gap-5 items-center cursor-pointer" onClick={() => {
                                setOpen(false);
                                nav("/a/perfil/dadosPrincipais");
                            }}>
                                <img alt="avatar" src={thumb} className="w-[40px] h-[40px] rounded-full bg-dark" />
                                <p className="m-0 p-0 text-text">
                                    {nome}
                                </p>
                            </div>

                        </div>
                        <div className="h-screen cursor-pointer w-[32px] fixed left-[50vh] flex items-center z-50" 
                        onMouseLeave={() => setOpen(false)}
                        onClick={() => setOpen(false)}>
                            <IoIosArrowBack className="text-white text-[22px]" />
                        </div>
                        <div className="fixed bg-[#00000050] w-screen h-screen z-40"></div>
                    </>
                ) : (
                    <div className="h-screen fixed cursor-pointer w-[32px] flex items-center z-10" onClick={() => setOpen(true)}>
                        <IoIosArrowForward className="text-text text-[22px]" />
                    </div>
                )
            }
        </>
    )
}

export default Sidebar;