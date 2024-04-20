import React, { useState } from 'react';
import filmes from '../../assets/filme.png';
import logo from '../../assets/logo.png';
import Input from '../../components/Input/Input';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"

import { useForm } from 'react-hook-form';
import { MdCalendarMonth } from 'react-icons/md';
import Select from '../../components/Input/Select';

const RegistroUsuarioScheema = yup
  .object({
    nomeCompleto: yup.string().required("O campo 'Nome Completo' é obrigatório."),
    dataNascimento: yup.string(),
    cpf: yup.string()
      .max(11, "O CPF precisa ter 11 dígitos.")
      .min(11, "O CPF precisa ter 11 dígitos."),
    nomeMaterno: yup.string(),
    telefone: yup.string(),
    genero: yup.string(),

    cep: yup.string()
      .min(8, "O CEP precisa ter 8 caracteres.")
      .max(8, "O CEP precisa ter 8 caracteres.")
  })

type RegistroUsuario = yup.InferType<typeof RegistroUsuarioScheema>;

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors} } = useForm<RegistroUsuario>({
    resolver: yupResolver(RegistroUsuarioScheema),
    shouldFocusError: true,
  });

  const [etapa] = useState<number>(0);
  const EtapaState =
    etapa === 0 ? "0%" : (
      etapa === 1 ? "50%" : (
        etapa === 2 ? "100%" : "0%"
      ));

  function RegistrarUsuario(data: RegistroUsuario) {
    console.log(data);
  }

  return (
    <div className='relative w-full h-screen'>
      <img src={filmes} alt='Filmes' className='absolute w-full h-screen object-cover -z-10' />
      <div className='container mx-auto pt-8'>
        <div className='bg-dark p-8 rounded-lg'>
          <div className='flex justify-center mb-3'>
            <img src={logo} alt='Logo' className='w-[80px]' />
          </div>
          {/* Etapas */}
          <div className='relative flex justify-between mx-4'>
            <div className='flex flex-col items-center relative'>
              <div className='w-8 h-8 rounded-full bg-primary z-10'></div>
              <p className='text-white  absolute top-12 z-10 text-center'>Dados pessoais</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className={`w-8 h-8 rounded-full z-10 bg-primary`}></div>
              <p className='text-white absolute top-12 z-10'>Endereço</p>
            </div>

            <div className='h-3 w-full bg-dark overflow-hidden top-[50%] translate-y-[-50%] absolute rounded-full'>
              <div className={`h-full w-[${EtapaState}] bg-primary`}>
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-8 h-8 rounded-full bg-primary z-10'></div>
              <p className='text-white z-10 absolute bottom-2 w-[max-content] text-center top-12'>Dados de <br /> acesso</p>
            </div>
          </div>
          {/*  */}

          {/* Formulário: Etapa 1 */}

          <div className='mt-20'>
            <form onSubmit={handleSubmit(RegistrarUsuario)}>
              {
                etapa === 0 && (
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <Input<RegistroUsuario>
                        fieldErrors={errors}
                        register={register}
                        field='nomeCompleto'
                        Titulo='Nome completo' />
                    </div>
                    <div>
                      <Input<RegistroUsuario>
                        fieldErrors={errors}
                        register={register}
                        field='nomeMaterno'
                        Titulo='Nome materno' />
                    </div>
                    <div>
                      <Input<RegistroUsuario>
                        fieldErrors={errors}
                        register={register}
                        Icon={<MdCalendarMonth />}
                        Type='date'
                        field='dataNascimento'
                        Titulo='Data de nascimento' />
                    </div>
                    <div>
                      <Input<RegistroUsuario>
                        fieldErrors={errors}
                        register={register}
                        field='telefone'
                        Titulo='Telefone com DDD' />
                    </div>
                    <div>
                      <Input<RegistroUsuario>
                        fieldErrors={errors}
                        register={register}
                        field='cpf'
                        Titulo='CPF' />
                    </div>
                    <div>
                      <Select<RegistroUsuario>
                        register={register}
                        field='genero'
                        options={[
                          { nome: "Masculino", valor: "M" },
                          { nome: "Feminino", valor: "F" }
                        ]}
                        placeholder='Selecione um gênero'
                        Titulo='Gênero' />
                    </div>
                  </div>
                )
              }

              <div className='mt-4 flex justify-end gap-4'>
                <button type='submit' className='cursor-pointer py-3 px-6 text-white bg-primary rounded-lg'>
                  próximo
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;