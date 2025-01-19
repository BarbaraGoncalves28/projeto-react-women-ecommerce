import React from 'react';
import Image1 from "../../assets/hero/img1.png";
import Image2 from "../../assets/hero/img2.png";
import Image3 from "../../assets/hero/img3.png";
import Image4 from "../../assets/hero/img4.png";
import Image5 from "../../assets/hero/img5.png";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Descontos arrasadores de até 50% em toda a coleção feminina!",
    },
    {
        id: 2,
        img: Image2,
        title: "Tudo o que você precisa para arrasar!",
    },
    {
        id: 3,
        img: Image3,
        title: "Renove seu estilo com até 50% de desconto nas roupas femininas!",
    },
    {
        id: 4,
        img: Image4,
        title: "Vista-se para arrasar, o look dos seus sonhos está aqui",
    },
    {
        id: 5,
        img: Image5,
        title: "Do casual ao sofisticado para você brilhar ainda mais",
    },
]

const Hero = ({handleOrderPopup}) => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div id="home" className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
      <div className='h-[800px] w-[800px] bg-primary absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

      </div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0 mt-20'> {/* Adicionando a margem superior */}
    <Slider {...settings}>
        {ImageList.map((data) => (
            <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl sm:text-1xl lg:text-5xl font-bold'>{data.title}</h1>
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                            <button onClick={handleOrderPopup} className='bg-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                Peça Agora
                            </button>
                        </div>
                    </div>
                    {/* image section */}
                    <div className='order-1 sm:order-2'>
                        <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                            <img src={data.img} alt='' className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </Slider>
</div>

    </div>
  )
}

export default Hero
