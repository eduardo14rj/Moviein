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
import { useNavigate } from 'react-router-dom';

const VisualFilme: React.FC = () => {
    const { theme } = useTheme();
    const nav = useNavigate();
        return (
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="youtube.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="youtube.com" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
          );
        }
        
export default VisualFilme;