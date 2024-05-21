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

    <div className="container mx-auto p-4">
      <div className="relative col-span-3">

        <div className="ball-purple absolute top-0 left-0"></div>
        <div className="ball-red absolute top-0 left-0"></div>

        <div className="relative">
          <img className="icon" src="img/vector.png" alt="Icon" />
          <h1 className="text text-3xl font-bold">Streaming feito para todos!</h1>
        </div>

        <img className="elipse w-full h-auto mt-4" src="img/elipse.jpg" alt="Elipse" />

        <div className="vantagens grid gap-4 mt-8">
          <div className="v1text vantagem-item bg-gray-100 p-4 rounded-lg shadow-md" id="card">
            <img className="movie w-12 h-12 mb-2" src="img/movie.png" alt="Movie" />
            <p>Criadores independentes têm a chance de brilhar. Com uma audiência ávida por conteúdo autêntico.</p>
          </div>

          <div className="v2text vantagem-item bg-gray-100 p-4 rounded-lg shadow-md" id="card">
            <img className="movie w-12 h-12 mb-2" src="img/movie.png" alt="Movie" />
            <p>Espaço onde sonhos cinematográficos se tornam realidade, graças ao apoio financeiro da comunidade.</p>
          </div>

          <div className="v3text vantagem-item bg-gray-100 p-4 rounded-lg shadow-md" id="card">
            <img className="movie w-12 h-12 mb-2" src="img/movie.png" alt="Movie" />
            <p>Espectadores se tornam parte ativa do processo criativo. Comentários construtivos, discussões apaixonadas e apoio mútuo são incentivados.</p>
          </div>

          <div className="v4text vantagem-item bg-gray-100 p-4 rounded-lg shadow-md" id="card">
            <img className="movie w-12 h-12 mb-2" src="img/movie.png" alt="Movie" />
            <p>Serve como ponto de encontro para profissionais da indústria, diretores, produtores, roteiristas e outros talentos podem se conectar e crescer juntos.</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default LandingPage;