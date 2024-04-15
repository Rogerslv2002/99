
  
  
  export  default function Widget(props){
      return(
          <div className=" flex flex-col gap-5 p-5 place-items-center   ">
            <p className=" text-5xl text-white font-bold">{props.Numero}</p>
              <p className=" text-white text-2xl font-medium text-center">{props.Titulo}</p>
              <p className=" text-xl text-white  text-center ">{props.Texto}</p>
  
          </div>
      )
  }