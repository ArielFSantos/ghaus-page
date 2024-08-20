import React, { useState, useEffect } from 'react';
import logoImage from '../assets/image/GG.png';
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
      <header  className=" font-bold fixed w-full font-sans flex flex-col md:flex-row justify-between items-center text-white p-5 z-50 bg-transparent">
        <div className="flex justify-between items-center w-full">
          <a href="#" className="bg-cover bg-top md:m-auto w-20 h-14" style={{ backgroundImage: `url(${logoImage})` }} />
          <button
            className={`p-3 bg-green-500 hover:bg-green-800  text-white rounded-full  ${showButton ? 'block' : 'hidden'} sm:hidden ${menuOpen ? 'hidden' : 'block'}`}
          >
            Fale Com o Vendedor
          </button>
          <button
            className="text-white text-3xl px-5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className={`flex flex-col md:flex-row items-center justify-between w-full ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="list-none flex flex-col md:flex-row items-center justify-center w-full md:w-auto">
            <li className="relative group">
              <a href="/" className="text-white whitespace-nowrap no-underline p-4 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b]">
                Tela Inicial
              </a>
            </li>
            <li className="relative group">
              <a href="/products" className="text-white no-underline p-4 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b]">
                Produtos
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="text-white no-underline p-4 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b]">
                Comentários
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="text-white no-underline p-4 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b]">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className={`w-full flex justify-center`}>
          <button className='p-3 bg-green-500 hover:bg-green-800 hidden md:block text-white rounded-full'>
            Fale Com o Vendedor
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
