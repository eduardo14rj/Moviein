import React from 'react';
import filmes from '../../assets/filme.png';
import { useNavigate } from 'react-router-dom';

const pagamento: React.FC = () => {
  return (

    
<div>
    <div className='relative w-full h-screen' >
        <div className='container padding-top'>
          <div className='grid-container-3'>
            <div className='container'>

              <button className='' type='button' title='viewer'>14,00$</button>
            </div>

            <div className='container'>
              <button type='button' title='critic'>16,00$</button>
            </div>

            <div className='container'>
              <button type='button' title='developer'>18,00$</button>
            </div>
          </div>
        </div>
    </div>
</div>
  );
}

export default pagamento;