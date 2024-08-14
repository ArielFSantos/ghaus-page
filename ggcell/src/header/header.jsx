import logoImage from '../assets/image/GG.png';

function Header() {
  return (
    <>
      <span className="fixed w-full font-sans flex flex-row justify-around items-center bg-transparent text-white p-5 z-50
                       sm:mx-12">
        <a href="#" className=" bg-cover bg-center w-20 h-14" style={{ backgroundImage: `url(${logoImage})` }} />
        <nav className='flex' >
          <ul className="list-none flex  items-center justify-around w-[40vw]">

            <li className="relative group">
              <a href="#" className="text-white no-underline p-2 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b]">
                Tela Inicial
                
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="text-white no-underline p-2 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b]">
                Produtos
                
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="text-white no-underline p-2 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b]">
                Comentários
                
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="text-white no-underline p-2 transition-colors duration-300 ease-in-out group-hover:text-[#cf945b]">
                Contato
                
              </a>
            </li>
          </ul>
        </nav>
      <button className='p-3 bg-green-500 hover:bg-green-800 font-serif  text-white rounded-full'>
              Fale Com o Vendedor
      </button>
      </span>
    </>
  );
}

export default Header;
