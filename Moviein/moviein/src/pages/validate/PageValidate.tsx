import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UserContext, { UseContextSchreema, UseContextType } from 'context/UserContext';
import { ApiService } from 'api/ApiService';
// import Api from 'api/api';

var Api = new ApiService();
const PageValidate: React.FC = () => {
  const navigate = useNavigate();
  const { setValue, watch, formState: { errors }, register } = useForm({
    resolver: yupResolver(UseContextSchreema)
  })

  useEffect(() => {
    const checkExpiration = () => {
      const expStr = localStorage.getItem('exp');
      if (expStr) {
        const exp = Date.parse(expStr);
        const now = Date.now();
        if (now >= exp) {
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
    };
    const intervalVar = setInterval(checkExpiration, 1000);

    return () => clearInterval(intervalVar);
  }, [navigate]);

  async function loadPerfil() {
    // try {
    //   var user = await Api.get<UseContextType>("api/usuario/get");
    //   setValue("nome", user.data.nome)
    //   setValue("email", user.data.email)
    //   setValue("thumb", user.data.thumb);
    //   setValue("auth2", user.data.auth2);
    // } catch (err) {

    // }
    // await Api.Get<>
  }

  useEffect(() => {
    async function perfil() {
      try {
        await Api.Get<UseContextType>({
          path: "api/usuario/get",
          thenCallback: (e) => {
            setValue("nome", e.nome)
            setValue("email", e.email)
            setValue("thumb", e.thumb)
            setValue("auth2", e.auth2)
          },
          erroTitulo: "Falha ao carregar dados do usuário logado."
        });
      } catch (err) {

      }
    }
    perfil();
  }, [setValue])


  return (
    <div className='bg-background w-full h-screen'>
      <UserContext.Provider value={{
        email: watch("email"),
        nome: watch("nome"),
        thumb: watch("thumb"),
        auth2: watch("auth2"),
        setValueUser: setValue,
        watchUser: watch,
        errorUser: errors,
        registerUser: register,
        reload: loadPerfil
      }}>
        <Sidebar />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default PageValidate;