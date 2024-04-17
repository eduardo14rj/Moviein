import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
type InputType = {
    Nome: string
    Type: string
    Icon: ReactNode
}

const Input: React.FC<InputType> = (p) => {
    return (
        <div className='w-100 mb-5 flex flex-col'>
            <label className='text-white mb-2'>{p.Nome}</label>
            <div className='relative'>
                <input type={p.Type} className='p-2 text-white outline-none rounded-lg bg-[transparent] w-full border-[1px] border-white' placeholder='...' />
                {React.cloneElement(p.Icon as React.ReactElement<any>, {
                    className: `text-white absolute right-4 bottom-[50%] translate-y-[50%]`
                })}
            </div>
        </div>
    );
}

export default Input;