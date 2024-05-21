import React from 'react';
import img from '../../assets/logo.png';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
const LandingPage: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className='container'>
      <div className="fixed bg-minhacor top-0 left-0 bg-background flex w-full h-[60px] z-[100] justify-between items-center">
        <div className='container flex justify-between'>
          <img alt='Moviein' src={img} className="w-[100px] object-contain" />
          <div className="flex gap-2">
            <Button titulo='cadastre-e' onClick={() => nav("/registro")} />
            <Button titulo='Entrar' onClick={() => nav("/login")} />
          </div>
        </div>
      </div>


    </div>
  );
}

export default LandingPage;