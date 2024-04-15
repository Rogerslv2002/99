import InputMask from 'react-input-mask';



export function WhatsappInput(props){
    return(
        <div className=" flex flex-col gap-3">
        <p className=" text-white text-xl font-semibold">{props.Texto}</p>
         <InputMask className=" bg-transparent border-2 border-white rounded-lg text-white p-2"  placeholder='(11)-99988-7755' mask='(99)-99999-9999'  value={props.Value} onChange={props.onChange} />
        </div>
        )
}