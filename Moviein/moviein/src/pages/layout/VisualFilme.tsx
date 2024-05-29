import React from 'react';
// import Button from 'components/Button';
import livre from '../../assets/filmes/livre.png';
import fundo from '../../assets/filmes/fundopanda7.jpg';
import tomate from '../../assets/tomate.png';
import pipoca from '../../assets/pipoca.png';


const VisualFilme: React.FC = () => {
        return (
          <div className="absolute mx-auto h-full w-full top-0 left-0 m-0 p-0 border-0 bg-cover" style={{ backgroundImage: `url(${fundo})` }}>
          <div className="container ml-12">
            <img className="w-20 h-20 mt-16 ml-10" src={livre} alt="Ícone de Indicação" />
            <h1 className="text-white text-7xl font-semibold ml-10 mt-12">Kung Fu Panda 4</h1>
            <h5 className="text-2xl  text-white font-normal leading-9 ml-10 mt-4 mb-16 max-w-6xl text-left">
            <br />
              Em "Kung Fu Panda 4", Po, o Grande Dragão Guerreiro, é escolhido para se tornar 
              o Líder Espiritual do Vale da Paz, mas enfrenta desafios ao encontrar e treinar 
              um novo Dragão Guerreiro, Zhen, uma raposa relutante. Enquanto isso, a Camaleoa 
              tenta ressuscitar vilões derrotados por Po, colocando em risco a paz novamente.
              <br /><br />
              Durante essa jornada cheia de ação e autodescoberta, Po também precisa lidar
              com suas próprias dúvidas sobre seu papel como líder e mentor. Com coragem, humor e a sabedoria 
              adquirida ao longo de suas aventuras, ele e Zhen devem unir forças para restaurar a paz e provar que, 
              juntos, são capazes de superar qualquer desafio.
            </h5>
            <div className="flex mt-8 ml-10">
                  <button
                  className="w-16 h-16 mr-4 rounded-full hover:bg-purple-700 bg-purple-600 focus:outline-none flex items-center justify-center">
                  &#9654;
                  </button>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-full px-5 py-3 ">
                  Apoie o projeto!
                  </button>
            </div>
          </div>

          <div className='flex justify-end gap-4 mr-10 bottom-0'>
              <button className='px-7 py-5 rounded-full items-center bg-background flex gap-3'>
                  <img src={tomate} alt="tomate" className='h-[20px] object-contain' />
                  <label>30%</label>
              </button>
              <button className='px-7 py-5 rounded-full items-center bg-background flex gap-3'>
                  <img src={pipoca} alt="pipoca" className='h-[20px] object-contain' />
                  <label>60%</label>
              </button>
          </div>
        </div>
          );
        }
        
export default VisualFilme;