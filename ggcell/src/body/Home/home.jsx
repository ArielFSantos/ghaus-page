import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS para as animações
import logoImage from '../../assets/image/GG.png';
import bgHome from '../../assets/image/bgHome.jpg';
import whatsappIcon from '../../assets/image/whatsapp-icon.webp'; // Importe o ícone do WhatsApp

function Home() {
  useEffect(() => {
    // Inicializa o AOS após o componente ser montado
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
    });
  }, []);

  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-blend-overlay text-center"
      style={{
        backgroundImage: `url(${bgHome}), radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%)`,
      }}
      data-aos="zoom-out"
    >
      {/* Overlay para escurecer o fundo */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Logo */}
        <div
          className="w-80 h-52 sm:w-7/12 sm:h-96 bg-no-repeat bg-cover mx-auto"
          style={{ backgroundImage: `url(${logoImage})` }}
          data-aos="fade-down"
        />

        {/* Texto e informações */}
        <p className="font-bold text-gray-200  text-1xl sm:p-5 sm:text-5xl mt-4" data-aos="fade-left">
          Celulares e Acessórios para Todos os Estilos
        </p>
        <h1 className="text-white  text-1xl sm:text-4xl font-semibold" data-aos="fade-right">
          10x <strong>Sem juros</strong> ou <strong>Desconto</strong> à Vista
        </h1>
        <h2 className="text-white text-1xl sm:text-3xl font-medium mt-2" data-aos="fade-up">
          <strong>Frete Grátis</strong> Goiânia
        </h2>

        {/* Link com a imagem do WhatsApp */}
        <a href="https://wa.me/556281974464" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
          <img
            src={whatsappIcon}
            alt="Fale com o Vendedor"
            className="w-32 h-32 sm:hidden cursor-pointer mx-auto hover:scale-125 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
