import { ToastType, ToasterToast } from "components/ui/use-toast";
import Api from "./api";

type toastere = {
    toast: ({ ...props }: ToastType) => {
        id: string;
        dismiss: () => void;
        update: (props: ToasterToast) => void;
    };
    dismiss: (toastId?: string | undefined) => void;
    toasts: ToasterToast[];
};

class ApiService {
    public static ToastContainer: toastere | null = null;

    public async Get<T>(path: string): Promise<T | undefined> {
        try {
            var d = await Api.get<T>(path);
            if (d.status === 200 || d.status === 204) {
                return d.data;
            } else {
                console.log(ApiService.ToastContainer);
                ApiService.ToastContainer?.toast({
                    title: "Erro",
                    description: "12345",
                    duration: 4000
                })
            }
        } catch (err) {
            console.log(ApiService.ToastContainer);
            ApiService.ToastContainer?.toast({
                title: "Erro",
                description: "12345",
                duration: 4000
            })
        }
    }


    public async Post<T>(path: string, data: any): Promise<T | undefined> {
        try {
            const response = await Api.post<T>(path, data);
            if (response.status === 201 || response.status === 200) {
                return response.data;
            } else {
                console.log(ApiService.ToastContainer);
                ApiService.ToastContainer?.toast({
                    title: "Erro",
                    description: "Erro ao enviar dados para a API",
                    duration: 4000
                });
            }
        } catch (err) {
            console.log(ApiService.ToastContainer);
            ApiService.ToastContainer?.toast({
                title: "Erro",
                description: "Erro ao enviar dados para a API",
                duration: 4000
            });
        }
        return undefined;
    }

}


export { ApiService };
