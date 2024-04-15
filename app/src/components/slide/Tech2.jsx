
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import {  FaLinode,  } from 'react-icons/fa6';
import { SiCivicrm, SiCpanel, SiDirectus, SiDocker, SiFigma, SiGithub, SiGrafana, SiMagento,
     SiPodman, SiSalesforce,  SiUmami, SiWordpress } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { SwiperSlide,Swiper } from 'swiper/react';
import { VscAzure } from 'react-icons/vsc';


export default function Tech2() {
  return (
    <>
      <Swiper
        loop={true}
        dir='rtl'
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
          <Card Icon={<SiMagento/>} Texto='Magento' />
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiWordpress/>} Texto='Wordpress' />
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiDirectus/>} Texto='Directus'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiSalesforce/>} Texto='Salesforce'/>
        </SwiperSlide>
        <SwiperSlide>
        <Card Icon={<SiCivicrm/>} Texto='Civicrm'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiUmami/>} Texto='Umami'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiCpanel/>} Texto='Cpanel'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiFigma/>} Texto='Figma'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<FaAws/>} Texto='Aws'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<VscAzure/>} Texto='Azure'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<FaLinode/>} Texto='Linode'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiGrafana/>} Texto='Grafana'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiGithub/>} Texto='Github'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiDocker/>} Texto='Docker'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiPodman/>} Texto='Podman'/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}


const Card =(props)=>{
    return(
        <div className='  group  hover:bg-gradient-to-r from-lime-300 to-emerald-300 p-5 flex flex-col place-items-center gap-5 text-center border-2 border-lime-300 rounded-xl backdrop-blur-md'>
            <span className=' text-5xl text-lime-300 group-hover:text-black'>{props.Icon}</span>
            <p className=' text-2xl font-semibold text-white group-hover:text-black'>{props.Texto}</p>

        </div>
    )
}