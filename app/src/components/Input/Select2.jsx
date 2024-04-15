



const SelectConheceu= ({Texto,Change,Value})=>{
    return(
        <div className=" flex flex-col gap-3">
        <p className=" text-white text-xl font-semibold">{Texto}</p>
      <select  className=" bg-transparent border-2 border-white rounded-lg text-white p-2"  value={Value} onChange={Change} >
      <option value=''>Selecione...</option>
        <option value='Instagram'>Instagram</option>
        <option value='X'>X</option>
        <option value='LinkedIn'>LinkedIn</option>
        <option value='Google'>Google</option>
        <option value='Indicação'>Indicação</option>
     
       </select>

        </div>
    )
}
export default SelectConheceu