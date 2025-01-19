
import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaCaretDown } from 'react-icons/fa';
import Cesta from "../../assets/cesta-vazia.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "Liquidação",
    link: "#liquidacao",
  },
  {
    id: 3,
    name: "Testemunhos",
    link: "#testemunhos",
  },
  {
    id: 4,
    name: "Contato",
    link: "#contato",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Top Produtos",
    link: "#topprodutos",
  },
  {
    id: 2,
    name: "Nossa Coleção",
    link: "#nossacolecao",
  },
];

const Navbar = () => {
  // Estado para controlar o carrinho
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Exemplo de estado de itens no carrinho

  // Função para abrir/fechar o carrinho
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='shadow-md bg-white z-40 fixed top-0 left-0 w-full'>
      {/* Upper Navbar */}
      <div className='bg-secondary py-2'>
        <div className='container mx-auto flex justify-between items-center'>
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" className='w-20 rounded-full' />
            </a>
          </div>
          
          {/* Search Bar */}
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group w-full sm:w-auto'>
              <input 
                type="text" 
                placeholder='Procurar...' 
                className='w-full sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500'/>
              <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
            </div>
          </div>

          {/* Order button */}
          <div className='flex gap-5'>
            <button className="text-primary relative" onClick={toggleCart}>
              <AiOutlineShoppingCart size={24} className='cursor-pointer drop-shadow-sm'/>
              <span className="absolute top-[-6px] left-5 bg-white text-primary text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Lower Navbar */}
      <div data-aos="zoom-in" className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
              </li>
            ))
          }
          {/* Simple Dropdown and Links */}
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2'>
              Trending 
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary'>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Sidebar do Carrinho */}
      {isCartOpen && (
        <div className='fixed top-0 right-0 w-[190px] h-full bg-white shadow-lg z-50 p-4'>
          {/* Botão Fechar (sempre visível) */}
          <button className="absolute top-4 right-4 text-primary text-xl" onClick={toggleCart}>Fechar</button>

          <h2 className="text-lg font-bold">Meus itens</h2>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <img src={Cesta} alt="Carrinho vazio" />
            </div>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between py-2">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;