import React, { ReactNode } from 'react';
import { FieldError, FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputType<T extends FieldValues> = {
    Titulo: string
    Type?: string
    Icon?: ReactNode

    field: Path<T>
    fieldErrors: FieldErrors<T>
    register: UseFormRegister<T>
}

const Input = <T extends FieldValues>({ Type, Titulo, Icon, register, field, fieldErrors }: InputType<T>) => {
    const error = fieldErrors[field as keyof T] as FieldError | undefined;

    return (
        <>
            <div className='w-100 mb-5 flex flex-col relative'>
                <label className='text-white mb-2'>{Titulo}</label>
                <div className='relative'>
                    <input {...register(field)}
                        type={Type}
                        className='p-2 text-white active:text-white outline-none rounded-lg bg-[transparent] w-full border-[1px] border-white' placeholder='...' />

                    {Icon && React.cloneElement(Icon as React.ReactElement<any>, {
                        className: `text-white absolute right-4 bottom-[50%] translate-y-[50%]`
                    })}
                </div>
                {error && <small className='text-redDark'>{error.message}</small>}
            </div>
        </>
    );
}

export default Input;