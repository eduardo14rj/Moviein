import React from 'react';
import filmes from '../../assets/filme.png';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const nav = useNavigate();

  return (
    <div className='relative w-full h-screen'>
      <img src={filmes} alt='Filmes' className='absolute w-full h-screen object-cover -z-10' />
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 grid-cols-1 h-screen'>
          <div className='md:col-start-2'>
            <div className='py-12 h-full'>
              <div className='bg-dark rounded-md p-8 flex flex-col h-full relative'>
                <div className='mb-4'>
                  <img src={logo} alt='Moviein' className='w-[120px]' />
                </div>
                <div className='mb-20'>
                  <h2 className='text-4xl mb-2 text-white'>Fazer login</h2>
                  <div className='flex gap-1'>
                    <p className='text-white'>Novo usuário?</p>
                    <p onClick={() => nav("/registro")} className='text-primary ml-1 cursor-pointer underline  decoration-slice'>Crie uma conta</p>
                  </div>
                </div>
                <form>
                  {/* <Input Icon={<MdEmail />} Titulo='Email' Type='email' />
                  <Input Icon={<MdOutlinePassword />} Titulo='Senha' Type='password' /> */}

                  <div className='flex gap-4 mt-4 justify-end'>
                    <input type='submit' value="Entrar" className='w-full cursor-pointer py-3 px-6 text-white bg-primary rounded-lg ' />
                  </div>
                </form>
                <div className='mt-6 flex gap-1'>
                  <p className='text-white'>Esqueceu sua senha?</p>
                  <p className='text-primary cursor-pointer underline decoration-slice'>Redefine aqui</p>
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