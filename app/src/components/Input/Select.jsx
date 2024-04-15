
function SelectDemanda (props){
    return(
        <div className=" flex flex-col gap-3">
        <p className=" text-white text-xl font-semibold">{props.Texto}</p>
        
      <select {...props}  className=" bg-transparent border-2 border-white rounded-lg text-white p-2"   >
       
      <option className=" bg-black/75" value=''>Selecione...</option>
        <option className=" bg-black/75" value='Desenvolvimento de Software'>Desenvolvimento de Software</option>
        <option className=" bg-black/75" value='Transformação Digital'>Transformação Digital</option>
        <option className=" bg-black/75" value='Modernização de Aplicações'>Modernização de Aplicações</option>
        <option className=" bg-black/75" value='Consultoria Magento'>Consultoria Magento</option>
        <option className=" bg-black/75" value='Consultoria Salesforce'>Consultoria Salesforce</option>
        <option className=" bg-black/75" value='Cloud Computing'>Cloud Computing</option>
        <option className=" bg-black/75" value='Blockchain e Criptomoedas'>Blockchain e Criptomoedas</option>
       </select>

        </div>
    )
}
export default SelectDemanda