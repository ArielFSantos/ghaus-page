import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logoImage from '../assets/image/GG.png';
import whatsappIcon from '../assets/image/whatsapp-icon.webp'; // Certifique-se de que o caminho e a extensão estão corretos
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className=" font-menu bg-gradient-to-br from-white/10 via-white/0 to-white/0 backdrop-blur-lg font-bold fixed w-full flex flex-col md:flex-row justify-between items-center text-white p-2 z-50 bg-transparent">
        <div className="flex justify-between items-center w-full">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="bg-cover bg-top md:m-auto w-20 h-14 pointer-events-auto cursor-pointer"
            style={{ backgroundImage: `url(${logoImage})` }}
          />
          <button
            className="text-white text-3xl px-5 md:hidden pointer-events-auto cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className={`flex flex-col md:flex-row items-center justify-between w-full ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="list-none flex flex-col md:flex-row items-center justify-center w-full md:w-auto">
            <li className="relative group">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-white whitespace-nowrap no-underline p-4 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#cf945b]"
              >
                Tela Inicial
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="products"
                smooth={true}
                duration={500}
                className="text-white no-underline p-4 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#cf945b]"
              >
                Produtos
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="social"
                smooth={true}
                duration={500}
                className="text-white no-underline p-4 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#cf945b]"
              >
                Comentários
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white no-underline p-4 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#cf945b]"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`w-full flex justify-center`}>
          {/* Link com a imagem do WhatsApp */}
          <a href="https://wa.me/556281974464" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
            <img
              src={whatsappIcon}
              alt="Fale com o Vendedor"
              className="w-24 h-24 p-0 hidden sm:block cursor-pointer mx-auto hover:scale-125 transition-transform duration-300"
            />
          </a>
        </div>
      </header>
      
      {/* Botão fixo no rodapé */}
      {showButton && (
        <a href="https://wa.me/556281974464" target="_blank" rel="noopener noreferrer" className="fixed bottom-0 right-0 z-50">
          <img
            src={whatsappIcon}
            alt="Fale com o Vendedor"
            className="w-32 h-32 sm:hidden cursor-pointer hover:scale-125 transition-transform duration-300"
          />
        </a>
      )}
    </>
  );
}

export default Header;
