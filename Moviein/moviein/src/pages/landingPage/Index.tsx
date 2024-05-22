import React from 'react';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import movie from '../../assets/filme.png';
import log from '../../assets/movie.png'
import aparelhos from '../../assets/aparelhos.png';
import moviein from '../../assets/moviein.png';
import movieinDark from '../../assets/moviein-dark.png';
import { useTheme } from 'components/ui/theme-provider';
import { FaRegCircleCheck } from "react-icons/fa6";
import { twMerge } from 'tailwind-merge';
type checkItem = {
  texto: string
  check: boolean
}

type AssinaturaCardType = {
  nome: string
  minNome: string
  color: "primary" | "darkRed" | "inverse",
  checks: checkItem[],
  preco: string
}
const AssinaturaCard: React.FC<AssinaturaCardType> = (p) => {
  function cor(prefix: string) {
    switch (p.color) {
      case `primary`:
        return `${prefix}-primary`
      case `darkRed`:
        return `${prefix}-redDark`
      case `inverse`:
        return `${prefix}-inverse`
      default:
        break;
    }
  }
  return (
    <div className={twMerge('relative p-6 py-10 rounded-xl border-primary border-[1px] text-text overflow-hidden', cor("border"))}>
      <div className={twMerge("w-[180px] h-[180px] absolute right-0 top-0 rounded-full blur-[50px] -z-10", cor("bg"))}></div>
      <div className={twMerge("w-[180px] h-[180px] absolute -left-5 bottom-[-60px] rounded-full blur-[50px] -z-10", cor("bg"))}></div>
      <div className='mb-8'>
        <h4 className='text-[28px]'>{p.nome}</h4>
        <small className='text-md'>{p.minNome}</small>
      </div>
      <div className='border-l-2 border-l-white/45 p-4 flex flex-col gap-8'>
        {
          p.checks.map((e, i) => (
            <div className={twMerge("flex gap-4", !e.check && "opacity-35")}>
              <div key={i}>
                <FaRegCircleCheck className='text-[28px]' />
              </div>
              <p className='text-[14px] text-text'>{e.texto}</p>
            </div>
          ))
        }
      </div>
      <p className='text-3xl font-bold mt-16 mb-12'>{p.preco}</p>
      <Button titulo='Comece agora' color={
        p.color === "primary" ? "primary" : (p.color === "darkRed" ? "red" : "outline-white")
      } className='w-full' />
    </div>
  )
}

const LandingPage: React.FC = () => {
  const nav = useNavigate();
  const { theme } = useTheme();
  return (
    <main>
      <nav className="fixed top-0 left-0 bg-background/80 border-b-[1px] backdrop-blur-sm border-b-gray-400/50 flex w-full h-[68px] z-[100] justify-between items-center">
        <div className='container flex justify-between'>
          {
            theme === "dark" && <img alt='Moviein' src={movieinDark} className="w-[100px] object-contain -dark:hidden" />
          }
          {
            (theme === "light" || theme === "system") && <img alt='Moviein' src={moviein} className="w-[100px] object-contain -dark:hidden" />
          }
          {/* <img alt='Moviein' src={moviein} className="w-[100px] object-contain dark:hidden" /> */}
          <div className="flex gap-2">
            <Button titulo='cadastre-e' color="red" onClick={() => nav("/registro")} />
            <Button titulo='Entrar' onClick={() => nav("/login")} />
          </div>
        </div>
      </nav>

      <section className="container mx-auto">
        <div className="relative col-span-3">

          <div className='bg-primary/80 w-[340px] h-[340px] rounded-full blur-[100px] top-[130px] absolute'></div>
          <div className='bg-redDark w-[160px] h-[160px] rounded-full blur-[80px] bottom-[130px] right-0 absolute -z-10'></div>

          <div className='grid grid-cols-3 h-screen items-center gap-[32px]'>

            <div className="relative">
              <img className="mb-4 w-[42px]" src={log} alt="Icon" />
              <h1 className="text text-6xl font-medium">Streaming feito para todos!</h1>
            </div>

            <img className="w-full h-[80vh] object-cover rounded-full border-[4px] border-redDark"
              src={movie}
              alt="Elipse"
            />

            <div className="grid gap-4 mt-8">
              <div className="bg-background border-b-4 border-b-primary p-4 rounded-[12px]" id="card">
                <img className="movie w-8 object-contain mb-3" src={log} alt="Movie" />
                <p>Criadores independentes têm a chance de brilhar. Com uma audiência ávida por conteúdo autêntico.</p>
              </div>

              <div className="bg-background border-b-4 border-b-primary p-4 rounded-[12px]" id="card">
                <img className="movie w-8 object-contain mb-3" src={log} alt="Movie" />
                <p>Espaço onde sonhos cinematográficos se tornam realidade, graças ao apoio financeiro da comunidade.</p>
              </div>

              <div className="bg-background border-b-4 border-b-primary p-4 rounded-[12px]" id="card">
                <img className="movie w-8 object-contain mb-3" src={log} alt="Movie" />
                <p>Espectadores se tornam parte ativa do processo criativo. Comentários construtivos, discussões apaixonadas e apoio mútuo são incentivados.</p>
              </div>

              <div className="bg-background border-b-4 border-b-primary p-4 rounded-[12px]" id="card">
                <img className="movie w-8 object-contain mb-3" src={log} alt="Movie" />
                <p>Serve como ponto de encontro para profissionais da indústria, diretores, produtores, roteiristas e outros talentos podem se conectar e crescer juntos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='container mx-auto min-h-screen grid grid-cols-3 gap-12 relative items-center'>

        <div className='bg-primary w-[360px] h-[360px] left-20 rounded-full blur-[120px] absolute -z-10'></div>
        <div className='col-span-2'>
          <img alt='responsividade' src={aparelhos} className='w-full' />
        </div>
        <div>
          <h2 className='text-4xl font-bold mb-6'>Feito para todos os Tamanhos</h2>
          <p className='text-2xl'>
            Aproveite cada momento assistindo filmes, séries ou curta metragens em qualquer resolução de tela, seja por TV 4k, Tablets ou até mesmo celulares!
          </p>
        </div>
      </section>

      <section className='container mx-auto min-h-screen'>
        <div className='col-span-3 text-center'>
          <h2 className='font-bold text-3xl mb-4'>Assinatura</h2>
          <p></p>
        </div>
        <div className='grid grid-cols-3 gap-[20px]'>
          <AssinaturaCard
            color='primary'
            nome='Cliente'
            minNome='Casual'
            preco='R$ 18,00/mês'
            checks={[
              {
                check: true,
                texto: "Livre para assistir qualquer vídeo gratuitamente (não alugados)."
              },
              {
                check: true,
                texto: "Avaliar vídeos como cliente"
              },
              {
                check: false,
                texto: "Avaliar vídeos como críticos"
              },
              {
                check: false,
                texto: "Enviar novo vídeo ou filme"
              }
            ]}
          />

          <AssinaturaCard
            color='darkRed'
            nome='Cliente'
            minNome='Casual'
            preco='R$ 18,00/mês'
            checks={[
              {
                check: true,
                texto: "Livre para assistir qualquer vídeo gratuitamente (não alugados)."
              },
              {
                check: true,
                texto: "Avaliar vídeos como cliente"
              },
              {
                check: true,
                texto: "Avaliar vídeos como críticos"
              },
              {
                check: false,
                texto: "Enviar novo vídeo ou filme"
              }
            ]}
          />
              <AssinaturaCard
            color='inverse'
            nome='Criador'
            minNome='Especial'
            preco='R$ 18,00/mês'
            checks={[
              {
                check: true,
                texto: "Livre para assistir qualquer vídeo gratuitamente (não alugados)."
              },
              {
                check: true,
                texto: "Avaliar vídeos como cliente"
              },
              {
                check: true,
                texto: "Avaliar vídeos como críticos"
              },
              {
                check: true,
                texto: "Enviar novo vídeo ou filme"
              }
            ]}
          />
        </div>
      </section>

    </main>
  );
}

export default LandingPage;