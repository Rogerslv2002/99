
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import {  FaServer, FaVuejs } from 'react-icons/fa6';
import { SiAstro, SiBootstrap, SiCrystal,  SiElixir, SiLaravel,   SiMailchimp,   SiNuxtdotjs, SiPhoenixframework,  SiRuby, SiRubyonrails, SiSvelte, SiTailwindcss, SiVisualstudiocode,  } from 'react-icons/si';
import { SwiperSlide,Swiper } from 'swiper/react';
import Card from '../ui/Card';


export default function Serviços() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card
                Icon={<SiVisualstudiocode/>}
                Titulo="Desenvolvimento de Software"   
                Texto="Desenvolvemos softwares e aplicativos sob medida e 
                customizados para a sua necessidade.Criamos e desenvolvemos seu MVP em até 45 dias.            "
                 />
        </SwiperSlide>
        <SwiperSlide>
        <Card
                 Icon={<FaServer/>}
                 Titulo="Modernização de Aplicações "
                 Texto="Sistemas legados? Repensamos e recriamos seus sistemas com
                  tecnologias de ponta, na nuvem, escaláveis e totalmente seguros.
                 "
                />
        </SwiperSlide>
        <SwiperSlide>
        <Card
                  Icon={<SiMailchimp/>}
                  Titulo="Automação de Processos & IA"
                  Texto="Automatizamos os seus processos analógicos, e repetitivos, 
                  gerando ganho de produtividade e reduzindo custos operacionais."
                 />
        </SwiperSlide>
        <SwiperSlide>
        <Card
                  Icon={<SiMailchimp/>}
                  Titulo="Automação de Processos & IA"
                  Texto="Automatizamos os seus processos analógicos, e repetitivos, 
                  gerando ganho de produtividade e reduzindo custos operacionais."
                 />
        </SwiperSlide>
        <SwiperSlide>
        <Card
                  Icon={<SiMailchimp/>}
                  Titulo="Automação de Processos & IA"
                  Texto="Automatizamos os seus processos analógicos, e repetitivos, 
                  gerando ganho de produtividade e reduzindo custos operacionais."
                 />
        </SwiperSlide>
        <SwiperSlide>
        <Card
                  Icon={<SiMailchimp/>}
                  Titulo="Automação de Processos & IA"
                  Texto="Automatizamos os seus processos analógicos, e repetitivos, 
                  gerando ganho de produtividade e reduzindo custos operacionais."
                 />
        </SwiperSlide>
   
      </Swiper>
    </>
  );
}

