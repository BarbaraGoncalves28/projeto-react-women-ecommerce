import React from 'react'
import BannerImg from "../../assets/women/banner.jpg";
import {GrSecure} from "react-icons/gr";
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
    <div id='liquidacao' className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          {/* image section */}
          <div data-aos="zoom-in">
            <img src={BannerImg} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'/>
          </div>
          {/* text details section */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Liquidação de Outono com até 70% de Desconto
            </h1>
            <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5 text-justify'>Aproveite a nossa Liquidação de Outono e renove seu guarda-roupa com até 70% de desconto! Descontos imperdíveis em produtos selecionados, só por tempo limitado. Não perca a chance de garantir suas peças favoritas com preços incríveis. Corra e aproveite!</p>
            <div className='flex flex-col gap-4'>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                <p>Produtos de Qualidade</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                <p>Entrega Rápida</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                <p>Método Fácil de Pagamento</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
                <p>Receba ofertas
                </p>
              </div>
            </div>
          </div>
        </div>  
      </div>      
    </div>
  )
}

export default Banner
