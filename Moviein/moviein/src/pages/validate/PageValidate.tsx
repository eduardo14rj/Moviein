import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UserContext, { UseContextSchreema, UseContextType } from 'context/UserContext';
import Api from 'api/api';

const PageValidate: React.FC = () => {
  const navigate = useNavigate();
  const { setValue, watch, formState: {errors}, register } = useForm({
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
    // setLoad(true);
    var user = await Api.get<UseContextType>("api/usuario/get");
    setValue("nome", user.data.nome)
    setValue("email", user.data.email)
    setValue("thumb", user.data.thumb);
    // setLoad(false);
  }


  useEffect(() => {
    async function perfil() {
      var user = await Api.get<UseContextType>("api/usuario/get");
      setValue("nome", user.data.nome)
      setValue("email", user.data.email)
      setValue("thumb", user.data.thumb);
    }
    perfil();
  }, [setValue])


  return (
    <div className='bg-background w-full h-screen'>
      <UserContext.Provider value={{
        email: watch("email"),
        nome: watch("nome"),
        thumb: watch("thumb"),
        setValueUser: setValue,
        watchUser: watch,
        errorUser: errors,
        registerUser: register,
        reload:loadPerfil
      }}>
        <Sidebar />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default PageValidate;