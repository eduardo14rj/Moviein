import React from 'react';
// import Button from 'components/Button';
import movie from '../../assets/filme.png';
import log from '../../assets/movie.png'
import aparelhos from '../../assets/aparelhos.png';
import moviein from '../../assets/moviein.png';
import movieinDark from '../../assets/moviein-dark.png';
import { FaRegCircleCheck } from "react-icons/fa6";
import { Button } from 'components/ui/button';
import fundo from '../../assets/filmes/livre.png';
import livre from '../../assets/filmes/fundo6.jpg';
import { useTheme } from 'components/ui/theme-provider';
import unisuamLight from '../../assets/Unisuam-light.png'
import unisuam from '../../assets/Unisuam.png'

const ViewMovie: React.FC = () => {
    const { theme } = useTheme();
        return (
            <div className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: "url('\src\assets\filmes\fundo6.jpg')"}}>
              <div className="container mx-auto">
                <img className="w-20 h-20 mt-16 ml-10" src="img/livre.png" alt="Ícone de Indicação" />
                <h1 className="text-white text-5xl font-semibold ml-10 mt-8">Homem-Aranha no Aranhaverso</h1>
                <h5 className="text-white font-normal text-lg ml-10 mt-4 mb-8 max-w-lg">
                  Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna o 
                  Homem-Aranha, inspirado no legado do já falecido Peter Parker. Entretanto, ao visitar o túmulo de 
                  seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje 
                  do herói por baixo de um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de 
                  uma dimensão paralela, onde outras versões do Homem-Aranha existem, incluindo uma versão mais velha e desiludida do 
                  próprio Peter, uma Spider-Gwen, um porco falante chamado Spider-Ham e até mesmo uma versão noir do herói. 
                  <br /><br />
                  Juntos, eles precisam unir forças para enfrentar uma ameaça que coloca todas as realidades em risco. 
                  Nessa jornada, Miles descobre não apenas o significado de ser um herói, mas também o
                  valor da família, da amizade e da autodescoberta, enquanto luta para encontrar seu lugar no universo aracnídeo.
                </h5>
                <div className="flex mt-8 ml-10">
                  <div className="mr-4">
                    <a href="#" className="text-white text-4xl bg-purple-600 rounded-full p-4">▶</a>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Apoie o projeto!</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        
export default ViewMovie;