import React from 'react';
import TextInput from '../Input/Text';
import { WhatsappInput } from '../Input/Whatsapp';
import SelectDemanda from '../Input/Select';
import SelectConheceu from '../Input/Select2';
import { useForm } from "react-hook-form"


const Form = () => {

    
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => alert(data)
  return (
    <form className=' flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
    <TextInput {...register("name")} type='text'  Texto='Nome'  />
      <TextInput {...register("email")} type='text' Texto='E-mail'  />
      <WhatsappInput Texto='WhatsApp' value={''}/>
      <TextInput type='text'  Texto='Nome da Empresa' value={''} />
      <TextInput  type='url' Texto='Site da Empresa (opcional)'  />
      <SelectDemanda/>
      <SelectConheceu/>
      <button className='bg-white w-full hover:bg-lime-300 text-xl text-black font-semibold p-2 rounded-xl' type="submit">Submit</button>
    </form>
  );
};

export default Form