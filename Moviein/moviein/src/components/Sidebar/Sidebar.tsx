import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Sidebar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const nav = useNavigate();
    return (
        <div className="h-screen fixed w-[32px]">
            {
                open ? (
                    <>
                        <div className="h-screen shadow-xl fixed p-4 left-0 w-[50vh] bg-dark shadow z-20" onClick={() => setOpen(true)}>

                            <div className="flex gap-5 items-center cursor-pointer" onClick={() => {
                                setOpen(false);
                                nav("/a/perfil/dadosPrincipais");
                            }}>
                                <img className="w-[40px] h-[40px] rounded-full bg-dark" />
                                <p className="m-0 p-0 text-white">
                                    John doe
                                </p>
                            </div>

                        </div>
                        <div className="h-screen cursor-pointer w-[32px] fixed left-[50vh] flex items-center z-20" onMouseLeave={() => setOpen(false)}>
                            <IoIosArrowBack className="text-white text-[22px]" />
                        </div>
                        <div className="fixed bg-[#00000050] w-screen h-screen z-10"></div>
                    </>
                ) : (
                    <div className="h-screen cursor-pointer w-[32px] flex items-center" onClick={() => setOpen(true)}>
                        <IoIosArrowForward className="text-white text-[22px]" />
                    </div>
                )
            }
        </div>
    )
}

export default Sidebar;