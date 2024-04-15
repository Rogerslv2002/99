
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import {  FaVuejs } from 'react-icons/fa6';
import { SiAstro, SiBootstrap, SiCrystal,  SiElixir, SiLaravel,   SiNuxtdotjs, SiPhoenixframework,  SiRuby, SiRubyonrails, SiSvelte, SiTailwindcss,  } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import { SwiperSlide,Swiper } from 'swiper/react';


export default function Tech() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          540: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card Icon={<FaVuejs/>} Texto='Vue' />
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiNuxtdotjs/>} Texto='Nuxt' />
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiSvelte/>} Texto='Svelte'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiAstro/>} Texto='Astro'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiTailwindcss/>} Texto='Tailwind'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiBootstrap/>} Texto='Bootstrap'/>
        </SwiperSlide>
        <SwiperSlide>
        <Card Icon={<FaPhp/>} Texto='PHP'/>
        </SwiperSlide> 
        <SwiperSlide>
            <Card Icon={<SiLaravel/>} Texto='Laravel'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiRuby/>} Texto='Ruby'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiRubyonrails/>} Texto='Rails'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiCrystal/>} Texto='Crystal'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiElixir/>} Texto='Elixir'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiPhoenixframework/>} Texto='Phoenix'/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

const Card =(props)=>{
    return(
        <div className=' group  hover:bg-gradient-to-r from-lime-300 to-emerald-300   p-5 flex flex-col place-items-center gap-5 text-center border-2 border-lime-300 rounded-xl backdrop-blur-md'>
            <span className=' text-5xl text-lime-300 group-hover:text-black'>{props.Icon}</span>
            <p className=' text-2xl font-semibold text-white group-hover:text-black'>{props.Texto}</p>

        </div>
    )
}