import { useState } from "react";
import Button from "../ui/Butoon"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export default function Navbar(){
    const [nav, setNav] = useState(false);
     
    const handleNav = () => {
      setNav(!nav);};
    return(
        <nav className="  border-b-2 backdrop-blur-sm border-white py-4 flex flex-row gap-5 justify-between px-5 lg:px-20">
            <h2 className=" text-3xl font-semibold text-lime-300">99system</h2>
            <span className=" hidden lg:flex">
              <Menu/>
            </span>
            <span className=" hidden lg:flex">
            <Button className='hidden lg:flex' Texto={'Entrar'}/>
            </span>
            <div onClick={handleNav} className='flex lg:hidden'>
         {  <AiOutlineMenu className=' text-5xl text-white text-wrap  '   />}
         <span className={nav ? 'grid fixed right-0 top-0 h-screen w-[70%] sm:w-[80%] md:w-[65%] border-l-4 border-r-gray-900 bg-black/70 backdrop-blur-6xl ease-in-out duration-500' : 'ease-in-out duration-500 fixed right-[-100%]'}>
          <AiOutlineClose className='mt-5 mr-5 text-5xl text-white  justify-self-end'/>
          <span className=" grid justify-center w-full top-0 -mt-72">
          <Menu/>

          </span>
    
          </span>
         </div>
         
        </nav>
    )
}

const Menu =()=>{
    return(
        <div className=" flex flex-col font-semibold lg:flex-row gap-5 text-4xl lg:text-2xl text-white text-center">
            <p>Home</p>
            <p>Sobre</p>
            <p>Case</p>
            <p>Faq</p>
            <p>contato</p>

         
        </div>
    )
}