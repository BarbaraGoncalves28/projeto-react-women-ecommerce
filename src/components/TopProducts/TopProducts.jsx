import React, { useState } from 'react';
import Img8 from "../../assets/women/roupa1.jpg";
import Img7 from "../../assets/women/roupa2.jpg";
import Img6 from "../../assets/women/roupa3.jpg";
import Img5 from "../../assets/women/roupa4.jpg";
import Img4 from "../../assets/women/roupa5.jpg";
import Img1 from "../../assets/women/roupa6.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Talented",
    price: 60.00
  },
  {
    id: 4,
    img: Img4,
    title: "Princess",
    price: 100.00,
  },
  {
    id: 5,
    img: Img5,
    title: "Elegant",
    price: 180.00,
  },
  {
    id: 6,
    img: Img6,
    title: "Marie",
    price: 90.00,
  },
  {
    id: 7,
    img: Img7,
    title: "Cat",
    price: 200.00,
  },
  {
    id: 8,
    img: Img8,
    title: "Star",
    price: 150.00,
  },
];

const TopProducts = ({ searchQuery }) => {

  const [selectedSize, setSelectedSize] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(true);

  // Função para selecionar o tamanho
  const handleSizeChange = (productId, size) => {
    setSelectedSize(prevState => ({
      ...prevState,
      [productId]: size,
    }));
  };

  // Função para adicionar produto ao carrinho
  const handleAddToCart = (product) => {
    const itemIndex = cartItems.findIndex(item => item.id === product.id && item.size === selectedSize[product.id]);
    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...product, size: selectedSize[product.id], quantity: 1 }]);
    } else {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    }
  };

  // Funções para aumentar e diminuir a quantidade no carrinho
  const handleIncreaseQuantity = (productId, size) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId && item.size === size ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (productId, size) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId && item.size === size && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Função para remover item do carrinho
  const handleRemoveItem = (productId, size) => {
    const updatedCart = cartItems.filter(item => !(item.id === productId && item.size === size));
    setCartItems(updatedCart);
  };

  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Função para enviar o pedido via WhatsApp
  const handleSendToWhatsApp = () => {
    const cartSummary = cartItems.map(item => `${item.title} (${item.size}) - ${item.quantity}x R$ ${item.price}`).join('%0A');
    const total = calculateTotal();
    const message = `*Pedido:*%0A${cartSummary}%0A*Total: R$ ${total}%0A%0A*Envie para pagamento*`;
    const whatsappLink = `https://wa.me/5511999999999?text=${message}`; // Altere o número do WhatsApp
    window.open(whatsappLink, '_blank');
  };

  // Função para fechar o carrinho
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div id='nossacolecao'>
      {/* Header */}
      <div className="container">
        <div className="text-center mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">Top produtos para você</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Nossos Melhores Produtos</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">Aproveite a coleção exclusiva e garanta seus looks favoritos.</p>
        </div>
      </div>

      {/* Body - Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 md:gap-24 place-items-center">
        {ProductsData.map((data) => (
          <div key={data.id} data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-primary relative shadow-xl duration-300 group max-w-[300px]">
            <div className="h-[100px]">
              <img src={data.img} alt={data.title} className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />
            </div>
            <div className="p-4 text-center">
              {/* Rating */}
              <div className="w-full flex items-center justify-center gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{`R$ ${data.price.toFixed(2)}`}</p>

              {/* Size Selection */}
              <div className="flex justify-center gap-4 mt-3">
                {['P', 'M', 'G'].map((size) => (
                  <button
                    key={size}
                    className={`text-sm py-1 px-3 rounded-full ${selectedSize[data.id] === size ? 'bg-primary text-white' : 'bg-gray-200'}`}
                    onClick={() => handleSizeChange(data.id, size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Add to Cart Button */}
              <div className="mt-4">
                <button
                  className={`bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary ${!selectedSize[data.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => selectedSize[data.id] ? handleAddToCart(data) : null}
                  disabled={!selectedSize[data.id]}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carrinho */}
      {cartItems.length > 0 && isCartOpen && (
        <div className="fixed top-0 right-0 w-[200px] h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
          <button onClick={handleCloseCart} className="absolute top-4 right-4 text-sm text-primary">Fechar</button>
          <h2 className="text-sm font-bold">Meus itens</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between py-1 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.title} className="w-9 h-9 object-cover rounded" />
                  <div>
                    <span className='text-xs'>{item.title} ({item.size})</span>
                    <p className="text-xs text-gray-500">R$ {item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-base text-primary" onClick={() => handleDecreaseQuantity(item.id, item.size)}>-</button>
                  <span className="text-primary text-base">{item.quantity}</span>
                  <button className="text-base text-primary" onClick={() => handleIncreaseQuantity(item.id, item.size)}>+</button>
                  <button className="text-xs text-red-500" onClick={() => handleRemoveItem(item.id, item.size)}>🗑️</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xs">
            <p><strong>Total: R$ {calculateTotal()}</strong></p>
            <button className="bg-primary text-white py-2 px-4 rounded mt-4 w-full" onClick={handleSendToWhatsApp}>Finalizar Pedido</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopProducts;
