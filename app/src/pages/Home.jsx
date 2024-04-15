
import { SiMailchimp, SiVisualstudiocode } from 'react-icons/si'
import Button from '../components/ui/Butoon'
import Card from '../components/ui/Card'
import Widget from '../components/ui/widget'
import { FaServer } from 'react-icons/fa6'
import Tech from '../components/slide/Tech'
import Tech2 from '../components/slide/Tech2'
import Form from '../components/Blocks/Form'
import Links from '../components/Blocks/LInks'
import Foto from '../assets/Foto.jpg'
import Serviços from '../components/slide/Seviços'
export default function Home(){
    return(
        <>
                
          <section className=" w-full px-5 pt-32 lg:px-10 lg:pt-40 pb-10 flex flex-col gap-8 place-items-center">
          
          <p className="bg-gradient-to-r from-lime-300 to-emerald-300 p-1 rounded-xl text-black capitalize text-center text-xl font-semibold">Software Development <br className='  flex md:hidden'/> & Tech Consulting</p>
  
   
          <h2  className=" capitalize text-white text-4xl lg:text-6xl text-center font-semibold" >
            Soluções digitais para desafios reais.
          <br/>Traga sua <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent ">empresa para o futuro.</span> 
            </h2>            
               <p className="bg-gradient-to-r from-lime-300 to-emerald-300 p-1 rounded-xl text-black text-lg text-center lg:text-2xl font-semibold">Seu MVP pronto em até 45 dias</p>
              
               <p className=" text-xl lg:text-2xl text-white text-center font-medium lg:px-40">
               A 99system é especializada no desenvolvimento de softwares abrangentes, desde plataformas e 
               sistemas até automação e aplicativos personalizados.
  
               </p>
                  <span className=" grid place-items-center">
              
               <Button Texto={' Vamos Converçar'} /> 
                  </span>
               
          </section>
     
        <section className=" w-full px-5 lg:px-10 py-10 flex flex-col gap-8 ">
            <h2 className=" text-white text-4xl lg:text-5xl text-center font-semibold">
            Descubra como a <span className="bg-gradient-to-r from-lime-300 to-emerald-300 text-transparent bg-clip-text"> 99system </span> <br/> pode te ajudar.

            </h2>
             
            
             <p className=" text-xl lg:text-2xl text-white text-center font-medium lg:px-0">
             Do conceito à implementação, somos seu parceiro de tecnologia.
            </p>
            <span className=' w-full'>
              <Serviços/>s
            </span>
         
      
          



            
             
        </section>
       
        <section className=" w-full px-5 lg:px-20 py-10 flex flex-col gap-8 ">
            <h2 className=" text-white text-4xl lg:text-5xl text-center font-semibold"> 
                Por que escolher a  <span className=" text-transparent bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-4xl lg:text-5xl text-center font-semibold">99system </span>
            </h2>

             
            
             <p className=" text-xl text-white text-center font-medium lg:px-40">
               Entendemos que os projetos não precisam sem longos e demorados. Nosso foco está em entregar valor em ciclos curtos e previsíveis.
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-3 border-2 backdrop-blur-md border-lime-300 rounded-xl divide-y-2 lg:divide-x-2 divide-lime-300  ">
                <Widget
                Numero={300} 
                Titulo="Mais rápido para lançar "
                Texto="Entendemos que velocidade é importante, por isso 
                criamos e desenvolvemos seu MVP em até 90 dias."
                />
                  <Widget 
                   Numero={100} 
                   Texto="Somos obcecados pela satisfação dos nossos clientes. 
                   Garantimos elevado nível de qualidade técnica e satisfação."
                   Titulo="De satisfação "
                   /> 
                 <Widget
                      Numero={60} 
                      Texto="Da arquitetura à infraestrutura e sustentação. 
                      Projetamos as soluções pensando na eficiência e escala.
      
                      "
                      Titulo="Menor o custo de manutenção  "
                      />
            
                
            </div>
            <span className=" flex  justify-center">

            <Button Texto={' Vamos Converçar'} /> 
            </span>



     
             
        </section>   
  
        <section className=" w-full px-5 lg:px-20 py-10 flex flex-col gap-8 ">
            <h2 className=" text-white text-4xl lg:text-5xl text-center font-semibold"><span className=" bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent"> Tecnologia & Ferramentas </span>    que Utilizamos
                </h2>
            <span>

            <Tech/>
            </span>

            <span>
                <Tech2/>
            </span>
            
             
        </section>

        <section className=" w-full flex flex-row gap-5 px-5 lg:px-20 py-10">
             <div className=" w-2/5 hidden  lg:grid place-items-center">
                <img className=" h-[90%] border-2 rounded-xl " src={Foto} alt="" />

             </div>
             <div className=" w-full lg:w-3/5 flex flex-col gap-5 ">
                <h2 className=" text-5xl text-white  font-semibold text-center">Quem Somos </h2>
                <img className=" h-[90%] border-2 rounded-xl flex md:hidden " src={Foto} alt="" />

                <p className=" text-white text-lg font-semibold">
                    Somos uma consultoria especializada em criar soluções inovadoras que agregam valor à vida de nossos clientes.
                  <br/>
                  <br />
                  Revolucionamos negócios com estratégias inovadoras e uma equipe altamente capacitada, focando em alcançar altos níveis de engajamento e conversão. Não somos apenas prestadores de serviço, somos seus parceiros comprometidos em guiá-lo rumo ao sucesso. Valorizamos conexões duradouras e compreendemos profundamente o poder da comunicação para transformar ideias em resultados concretos. Cada cliente recebe uma abordagem personalizada para garantir que alcancemos juntos os objetivos estabelecidos de forma eficaz e impactante. Estamos prontos para elevar sua empresa a novos patamares de sucesso.
                <br/>
                <br />
                <span className=' hidden md:flex'>

                Se você está em busca de um parceiro que compreenda a importância da performance e tenha expertise nas principais tecnologias e ferramentas do mercado para impulsionar a transformação de sua empresa, estamos prontos para ser essa parceria essencial em sua jornada rumo ao sucesso.
                </span>
                 

                </p>

             </div>
        </section>
       
        <section className=" w-full px-5 lg:px-20 py-10 flex flex-col gap-8 ">
            <span className="overflow-hidden flex flex-row border-2 rounded-xl border-transparent bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-border ">
  <div className="lg:p-10 p-3 backdrop-blur-sm flex flex-row">
    <div className="  flex flex-col gap-5 w-full lg:w-full">
      <h2 className="text-3xl text-black font-semibold text-center lg:text-start">
      Chegou a hora de elevar o seu negócio para o próximo nível!
      </h2>

      <p className=" text-black text-xl font-medium">
      Transforme o destino da sua empresa com apenas um clique! Alcance níveis extraordinários de excelência enquanto economiza tempo e dinheiro com as nossas soluções inovadorads. Não perca mais tempo, dê o passo rumo ao sucesso agora mesmo!"
      </p>

      <div className=" grid place-items-center lg:place-items-start">
        <a
          href="#"
          className=" text-black  bg-white p-2 text-2xl rounded-lg font-semibold "
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="w-1/3  hidden lg:flex  object-cover"
  />



            </span>
            
             
        </section>
        <section className=" px-5 lg:px-20 py-10 flex flex-col gap-8">
            <h2 className=" text-white text-4xl font-semibold  text-center">Entre em contato conosco</h2>
            <div className=" flex flex-col-reverse lg:flex-row gap-10">
                <div className=" w-full lg:w-1/2 flex flex-col gap-10 lg:gap-3 place-self-center">
                  <p className=' text-white font-semibold text-3xl text-center'> Outras formas de contato </p>
                  <Links/>

                </div>
                <div className=" w-full lg:w-1/2">
                    <Form/>
                </div>
            </div>
        </section>
        </>
    )
}