import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar';
const PageValidate: React.FC = () => {
  const navigate = useNavigate();

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

  return (
    <div className='bg-dark w-full h-screen'>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default PageValidate;