import Api from "api/api";
import { Switch } from "./ui/switch"
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "context/UserContext";

type InputSwitchAutenticacao2FatoresType = {
    auth2?: boolean
}
const InputSwitchAutenticacao2Fatores: React.FC<InputSwitchAutenticacao2FatoresType> = (p) => {
    const [check, setCheck] = useState<boolean>(p.auth2 ?? false);
    const { setValueUser } = useContext(UserContext);
    const [disable, setDisable] = useState<boolean>(false);
    async function toggle2Auth() {
        if(!disable){
            setDisable(true);    
            var e = await Api.get("api/usuario/toggleAuth2");
            if (e.status === 200) {
                setCheck(!check);
                toast.success(`Autenticação de 2 fatores: ${check ? "Inativo" : "Ativo"}`)
                setValueUser("auth2", !check);
                setDisable(false);
            }
        }
    }

    return (
        <>
            <div className="flex gap-8 justify-between cursor-pointer my-4" onClick={toggle2Auth}>
                <label htmlFor="auth2"
                    className="pointer-events-none"
                    onClick={toggle2Auth}
                >
                    Ativar autenticação de dois fatores?
                </label>
                <Switch id="auth2" checked={check} defaultChecked={p.auth2} />
            </div>
        </>
    )
}

export default InputSwitchAutenticacao2Fatores;