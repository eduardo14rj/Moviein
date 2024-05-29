import React from 'react';
import film from '../../assets/filmes/film1.png';
import { Button } from 'components/ui/button';
import tomate from '../../assets/tomate.png';
import pipoca from '../../assets/pipoca.png';
import { Carousel, CarouselContent, CarouselItem } from 'components/ui/carousel';
import { useNavigate } from 'react-router-dom';

const Principal: React.FC = () => {
    const nav = useNavigate();
    return (
        <main>

            <div className='relative h-[24vh]'>
                <div className='bg-background absolute w-full h-full z-[1]'>
                    <img src={film} alt="filme" className='w-full opacity-60 h-full object-cover' />
                </div>
                <div className='container relative z-20'>
                    <div className='grid grid-cols-2 items-end h-[24vh] pb-14'>
                        <div>
                            <h3 className='text-[28px] text-text font-bold'>Kung fu panda 4</h3>
                            {/* <p>Em "Kung Fu Panda 4", Po, o Grande Dragão Guerreiro, é escolhido para se tornar o Líder Espiritual do Vale da Paz, mas enfrenta desafios ao encontrar e treinar um novo Dragão Guerreiro, Zhen, uma raposa relutante. Enquanto isso, a Camaleoa tenta ressuscitar vilões derrotados por Po, colocando em risco a paz novamente.</p> */}
                        </div>
                        <div className='flex justify-end gap-4'>
                            <button className='p-2 rounded-full items-center bg-background flex gap-3'>
                                <img src={tomate} alt="tomate" className='h-[18px] object-contain' />
                                <label>30%</label>
                            </button>
                            <button className='p-2 rounded-full items-center bg-background flex gap-3'>
                                <img src={pipoca} alt="pipoca" className='h-[18px] object-contain' />
                                <label>60%</label>
                            </button>
                            <Button onClick={() => nav("VisualFilme")} variant="red">
                                Assistir
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='w-full absolute z-[10] h-[60px] bottom-0 left-0 bg-gradient-to-b from-transparent to-background'></div>
            </div>
            <section className='container mt-8'>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className='basis-1/5'>
                            <div className='p-8 border-primary relative border-[1px] h-[200px] rounded-xl'>
                            
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </section>
        </main>
    );
}

export default Principal;