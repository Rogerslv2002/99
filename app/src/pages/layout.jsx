import Footer from "../components/Blocks/Footer";
import Navbar from "../components/Blocks/Navbar";
export default function Layout({children}){
    return(
        <>
         <div class="absolute top-0 z-[-2] overflow-y-scroll h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <span className=" w-full fixed z-30">
            <Navbar/>

            </span>
            {children}
            <Footer/>
         </div>
        </>
    )
}