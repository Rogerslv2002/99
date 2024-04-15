import React from "react";



export default function TextInput(props){
    return(
        <div className=" flex flex-col gap-3">
        <p className=" text-white text-xl font-semibold">{props.Texto}</p>
        <input  className=" bg-transparent border-2 border-white rounded-lg text-white p-2"      />
        </div>
    )
}