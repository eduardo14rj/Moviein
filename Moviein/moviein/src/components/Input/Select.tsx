import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface Options {
    valor: any,
    nome: string
}

type SelectType<T extends FieldValues> = {
    Titulo: string
    placeholder: string
    options: Options[]
    field: Path<T>
    register: UseFormRegister<T>
}

const Select = <T extends FieldValues>({ Titulo, register, field, placeholder, options }: SelectType<T>) => {
    return (
        <div className='w-100 mb-5 flex flex-col'>
            <label className='text-white mb-2'>{Titulo}</label>
            <div className='relative'>
                <select {...register(field)} className='p-2 text-white outline-none rounded-lg bg-[transparent] w-full border-[1px] border-white' >
                    <option value={undefined}>{placeholder}</option>
                    {
                        options.map((e, i) => (
                            <option
                                key={i}
                                value={e.valor}
                            >
                                {e.nome}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default Select;