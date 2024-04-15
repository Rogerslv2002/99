import { FaDiscord, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6"
import Button from "../ui/Butoon"


export default function Footer(){
  
    return(
        <div className=" place-items-center  border-t-2 backdrop-blur-sm border-white py-5 lg:py-10 flex flex-col md:flex-row gap-5 justify-between px-5 lg:px-20">
            <h2 className=" text-3xl font-semibold text-white">99system</h2>
            <p className="  hidden lg:flex text-2xl text-white font-semibold"> 99System| Copyright 2024</p>
            <span className=" flex flex-row gap-5 text-3xl text-lime-300">
                <FaInstagram className=" hover::text-4xl"/>
                <FaX className=" hover:text-4xl"/>
                <FaLinkedin className=" hover:text-4xl"/>
                <FaDiscord className=" hover:text-4xl"/>
            </span>
         
        </div>
    )
}

