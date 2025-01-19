import React from 'react'
import footerLogo from "../../assets/logo.jpg";
import Banner from "../../assets/footer-pattern.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "Sobre",
        link: "/#about",
    },
    {
        title: "Contato",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
  return (
    <div id='contato' style={BannerImg} className='text-white'>
        <div className='container'>
            <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
                {/* company details */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'><img src={footerLogo} alt="" className='max-w-[50px] rounded-full'/>The Velvet Red</h1>
                        <p className='text-justify'>A <span className='italic'>The Velvet Petal</span> é um lugar encantador, onde elegância e qualidade se encontram em cada detalhe. Nossa loja oferece uma seleção exclusiva de produtos sofisticados, pensados para quem busca o melhor em estilo e atendimento. Venha nos visitar e descubra um mundo de experiências únicas e itens que vão conquistar seu coração.  Estamos esperando por você!</p>
                    </div>
                {/* Footer Links */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}><span>{link.title}</span></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}><span>{link.title}</span></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* social links */}
                    <div>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="#">
                                <FaInstagram className='text-3xl hover:text-primary'/>
                            </a>
                            <a href="#">
                                <FaFacebook className=' text-3xl hover:text-primary'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl hover:text-primary'/>
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt/>
                                <p>+91 123456789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Footer
