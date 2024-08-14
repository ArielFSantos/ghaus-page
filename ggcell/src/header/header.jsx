import logoImage from '../assets/image/GG.png';

function Header() {
  return (
    <>
      <span className="fixed w-full font-sans flex flex-row justify-around items-center bg-transparent text-white p-5 z-50">
        <a href="#" className="bg-cover bg-center w-20 h-14" style={{ backgroundImage: `url(${logoImage})` }} />
        <nav>
            <ul className="list-none flex justify-around w-[40vw]">
                <li>
                  <a href="#" className="relative text-white no-underline p-2 transition-colors duration-300 ease-in-out hover:text-[#cf945b]">
                    Tela Inicial
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#cf945b] transition-all duration-300 ease-in-out w-0 hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative text-white no-underline p-2 transition-colors duration-300 ease-in-out hover:text-[#cf945b]">
                    Produtos
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#cf945b] transition-all duration-300 ease-in-out w-0 hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative text-white no-underline p-2 transition-colors duration-300 ease-in-out hover:text-[#cf945b]">
                    Comentarios
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#cf945b] transition-all duration-300 ease-in-out w-0 hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative text-white no-underline p-2 transition-colors duration-300 ease-in-out hover:text-[#cf945b]">
                    Contato
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#cf945b] transition-all duration-300 ease-in-out w-0 hover:w-full" />
                  </a>
                </li>
            </ul>
        </nav>
      </span>
    </>
  );
}

export default Header;
