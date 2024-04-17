import React from 'react';
import filmes from '../../assets/filme.png';

const Login: React.FC = () => {
  return (
    <div className='relative w-full h-screen'>
      <img src={filmes} className='absolute w-full h-full object-cover -z-10' />
      <div className='container mx-auto'>

        <div className='grid grid-cols-2 h-screen'>
          <div className='col-start-2'>
            <div className='py-12 h-full'>
              <div className='bg-slate-500 rounded-md p-4 flex h-full'>
                Preparando o ambiente do front e back
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;