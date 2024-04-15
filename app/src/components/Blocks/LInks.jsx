import { FaDiscord, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa6"




export default function Links(){
    return(
        <>
         <div className=" flex flex-col p-5 rounded-xl gap-5 backdrop-blur-sm border-2 border-lime-300">
            <Redes Icon={<FaWhatsapp/>}
             Titulo={'Whatsapp'}
            />
            <Redes Icon={<FaTelegram/>}
             Titulo={'Telegram'}
            />
            <Redes Icon={<FaInstagram/>}
             Titulo={'Instagram'}
            />
            <Redes Icon={<FaLinkedin/>}
             Titulo={'Linkedin'}
            />
            <Redes Icon={<FaDiscord/>}
             Titulo={'Discord'}
            />
         </div>


        </>
    )
}



const Redes=({Icon,Titulo })=>{
    return(
        <div className=" justify-center w-full flex flex-row border-2 bg-white rounded-xl gap-5 p-4 hover:bg-gradient-to-r from-lime-300 to-emerald-300">
            <span className=" text-3xl text-black">{Icon}</span>
            <p className=" text-black text-3xl font-semibold">{Titulo}</p>
        </div>
    )
}