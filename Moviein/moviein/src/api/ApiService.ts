import { ToastElement } from "@radix-ui/react-toast";
import { Toast } from "components/ui/toast";
import { ToastType, ToasterToast } from "components/ui/use-toast";
import Api from "./api";

class ApiService {
    public static toast: {
        toast: ({ ...props }: ToastType) => {
            id: string;
            dismiss: () => void;
            update: (props: ToasterToast) => void;
        };
        dismiss: (toastId?: string | undefined) => void;
        toasts: ToasterToast[];
    }

    public getAsync<t>(){
        ApiService.toast.toast({
            title: "teste",
            description: "isso é um teste de serviço"
        })
    }

}
var Api = new ApiService();

export { Api };
export default ApiService;
