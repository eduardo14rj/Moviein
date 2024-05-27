import React, { useState } from 'react';
import filmes from '../../assets/filme.png';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchreema, { LoginSchreemaType } from './LoginSchreema';
// import Input from '../../components/Input/Input';
import { AxiosError } from 'axios';
import Api from '../../api/api';
import { toast } from 'react-toastify';
import { Button } from 'components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'components/ui/form';
import { Input } from 'components/ui/input';

const Login: React.FC = () => {
  const nav = useNavigate();
  const [load, setLoad] = useState<boolean>(false);
  const form = useForm<LoginSchreemaType>({
    resolver: yupResolver(LoginSchreema)
  })

  type LoginDTO_Res = {
    token: string,
    funcao: string
    exp: number
    expiracao: Date
  }

  async function LoginEntrar(data: LoginSchreemaType) {
    setLoad(true);

    try {
      var e = await Api.post<LoginDTO_Res>("/api/usuario/login", data);
      if (e.status === 200 || e.status === 204) {
        window.localStorage.setItem("token", e.data.token);
        window.localStorage.setItem("funcao", e.data.funcao);
        window.localStorage.setItem("exp", e.data.expiracao.toString());
        setLoad(false);
        nav("/a/")
      }
    } catch (error) {
      setLoad(false);
      var errorData = error as AxiosError<{ mensagem: string }>;
      toast.error(errorData.response?.data.mensagem);
    }
  }

  return (
    <div className='relative w-full h-screen'>
      <img src={filmes} alt='Filmes' className='absolute w-full h-screen object-cover -z-10' />
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 grid-cols-1 h-screen'>
          <div className='md:col-start-2'>
            <div className='py-12 h-full'>
              <div className='bg-background rounded-md p-8 flex flex-col h-full relative'>
                <div className='mb-4'>
                  <img src={logo} alt='Moviein' className='w-[120px]' />
                </div>
                <div className='mb-20'>
                  <h2 className='text-4xl mb-2 text-text'>Fazer login</h2>
                  <div className='flex gap-1'>
                    <p className='text-text'>Novo usuário?</p>
                    <p onClick={() => nav("/registro")} className='text-primary ml-1 cursor-pointer underline  decoration-slice'>Crie uma conta</p>
                  </div>
                </div>
                <Form {...form}>
                  <form className='gap-4 flex flex-col'
                    onSubmit={form.handleSubmit(LoginEntrar)}>
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
                    <FormField
                      control={form.control}
                      name="senha"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Senha</FormLabel>
                          <FormControl>
                            <Input {...field} type='password' />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className='flex gap-4 mt-4 justify-end'>
                      <Button type="submit" className='w-full' load={load}>
                        Entrar
                      </Button>
                    </div>
                  </form>
                </Form>
                <div className='mt-6 flex gap-1'>
                  <p className='text-text'>Esqueceu sua senha?</p>
                  <p className='text-primary cursor-pointer underline decoration-slice' onClick={() => nav("/enviarCodigo")}>Redefine aqui</p>
                </div>

                <div className='mt-6'>
                  <p className='text-white cursor-pointer underline decoration-slice absolute bottom-4 right-4'>Termos de uso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;