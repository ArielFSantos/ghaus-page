import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS para as animações
import logoImage from '../../assets/image/GG.png';
import bgHome from '../../assets/image/bgHome.jpg';

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
    >
      {/* Overlay para escurecer o fundo */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Logo */}
        <div
          className="w-80 h-52 bg-no-repeat bg-cover mx-auto"
          style={{ backgroundImage: `url(${logoImage})` }}
          data-aos="fade-down"
        />

        {/* Texto e informações */}
        <p className="font-bold text-gray-200 p-2 text-2xl sm:text-3xl mt-4" data-aos="fade-left">
          Celulares e Acessórios para Todos os Estilos
        </p>
        <h1 className="text-white p-2 text-xl sm:text-2xl font-semibold" data-aos="fade-right">
          10x <strong>Sem juros</strong> ou <strong>Desconto</strong> à Vista
        </h1>
        <h2 className="text-white text-lg font-medium mt-2" data-aos="fade-up">
          <strong>Frete Grátis</strong> Goiânia
        </h2>

        {/* Botão */}
        <a href="#" data-aos="zoom-in">
          <button className="p-4 mt-4 bg-green-500 hover:bg-green-700 font-bold text-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
            Fale Com o Vendedor
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
