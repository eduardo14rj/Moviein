import { FieldError, FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface Options {
    valor: any,
    nome: string
}

type SelectType<T extends FieldValues> = {
    Titulo: string
    placeholder: string
    options: Options[]
    field: Path<T>
    
    fieldErrors: FieldErrors<T>
    register: UseFormRegister<T>
}

const Select = <T extends FieldValues>({ Titulo, register, field, placeholder, options, fieldErrors }: SelectType<T>) => {
    const error = fieldErrors[field as keyof T] as FieldError | undefined;

    return (
        <div className='w-100 mb-5 flex flex-col'>
            <label className='text-text mb-2'>{Titulo}</label>
            <div className='relative'>
                <select {...register(field)} className='p-2 text-white outline-none rounded-lg bg-[transparent] w-full border-[1px] border-white' >
                    <option value="" className='bg-dark text-white/40'>{placeholder}</option>
                    {
                        options.map((e, i) => (
                            <option
                                className='bg-dark'
                                key={i}
                                value={e.valor}
                            >
                                {e.nome}
                            </option>
                        ))
                    }
                </select>
                {error && <small className='absolute -bottom-6 left-0 text-redDark'>{error.message}</small>}
            </div>
        </div>
    );
}

export default Select;