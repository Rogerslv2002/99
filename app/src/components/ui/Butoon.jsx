



export default function  Button(props){
    return(
        <button{...props} className=' font-semibold bg-white  hover:bg-lime-300 text-black  px-4 py-1 rounded-lg text-2xl' >
             {props.Texto}
        </button>
    )
}