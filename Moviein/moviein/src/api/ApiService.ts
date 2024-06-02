import { ToastType, ToasterToast } from "components/ui/use-toast";
import Api from "./api";
import { AxiosError } from "axios";

type toastere = {
    toast: ({ ...props }: ToastType) => {
        id: string;
        dismiss: () => void;
        update: (props: ToasterToast) => void;
    };
    dismiss: (toastId?: string | undefined) => void;
    toasts: ToasterToast[];
};

type ApirequestPostType<T> = {
    path: string,
    data: any,
    erroTitulo: string
    thenCallback?: (response: T) => any,
    catchCallback?: () => any
}

type ApirequestGetType<T> = {
    path: string,
    erroTitulo: string
    thenCallback?: (response: T) => any,
    catchCallback?: () => any
}

type ApiErrorException = {
    status: string
    message: string
    data: any
}

type ApiSuccess<T> = {
    status: string
    message: string
    data: T
}


class ApiService {
    public static ToastContainer: toastere | null = null;

    public async Get<T>(data: ApirequestGetType<T>): Promise<T | undefined> {
        try {
            var d = await Api.get<ApiSuccess<T>>(data.path);
            if (d.status === 200 || d.status === 204) {
                if (data.thenCallback !== undefined) data.thenCallback(d.data.data);
                return d.data.data;
            } else {
                ApiService.ToastContainer?.toast({
                    title: data.erroTitulo,
                    description: d.data.message,
                    duration: 4000
                })
            }
        } catch (err) {
            var errorData = err as AxiosError<ApiErrorException>;
            ApiService.ToastContainer?.toast({
                title: data.erroTitulo,
                description: errorData.message,
                duration: 4000
            })
        }
    }


    public async Post<T>(data: ApirequestPostType<T>): Promise<T | undefined> {
        try {
            const response = await Api.post<ApiSuccess<T>>(data.path, data.data);
            if (response.status === 201 || response.status === 200) {
                if (data.thenCallback !== undefined) data.thenCallback(response.data.data);
                return response.data.data;
            } else {
                ApiService.ToastContainer?.toast({
                    title: "Erro",
                    description: response.data.message,
                    duration: 4000
                });
            }
        } catch (err) {
            var errorData = err as AxiosError<ApiErrorException>;
            ApiService.ToastContainer?.toast({
                title: data.erroTitulo,
                description: errorData.response?.data.message,
                duration: 4000,
                className: "bg-red"
            });
        }
        return undefined;
    }

}


export { ApiService };
