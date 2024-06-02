import { yupResolver } from '@hookform/resolvers/yup';
import { ApiService } from 'api/ApiService';
import { Button } from 'components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'components/ui/form';
import { Input } from 'components/ui/input';
import { useToast } from 'components/ui/use-toast';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const EnviarSenhaSchreema = yup.object({
  email: yup.string().required("Insira o seu email").email("Email inválido")
})

type EnviarSenhaType = yup.InferType<typeof EnviarSenhaSchreema>;
var api = new ApiService();
const EnviarCodigo: React.FC = () => {
  const nav = useNavigate();
  const form = useForm({
    resolver: yupResolver(EnviarSenhaSchreema)
  })
  const { toast } = useToast();
  const [loadred, setLoadred] = useState<boolean>(false);

  async function submit(data: EnviarSenhaType) {
    setLoadred(true);
    await api.Post<{ code: string }>({
      path: "api/usuario/resetPasswordCode",
      data: data,
      erroTitulo: "Falha ao enviar código de redefinição.",
      thenCallback: (d) => {
        toast({
          title: "Código gerado",
          description: "Enviamos um código de redefinição de senha em sua caixa de email.",
          className: "bg-success"
        });
        nav("/RedefinirSenha", { state: { code: d.code, email: data.email } });
      }
    })
    setLoadred(false);
  }

  return (
    <div className='bg-gradient-to-br flex justify-center items-center w-full h-screen from-primary to-red'>
      <div className='w-[80vh] p-8 bg-background rounded-xl'>
        <h2 className='text-xl'>Redefinir Senha</h2>
        <Form {...form}>
          <form className='mt-10' onSubmit={form.handleSubmit(submit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='mt-4 flex justify-end gap-4'>
              <Button type='button'
                variant='outline'
                onClick={() => nav(-1)}>
                Cancelar
              </Button>
              <Button
                type='submit'
                load={loadred}
              >
                Enviar código de redefinição
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default EnviarCodigo;