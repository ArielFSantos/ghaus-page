import { useEffect } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS para as animações

import xiaomi from '../../assets/image/XiaomiLogo.png';
import apple from '../../assets/image/Apple.png';
import jbl from '../../assets/image/JBL.png';
import samsung from '../../assets/image/samsung.webp';
import poco from '../../assets/image/poco.png';
import motorola from '../../assets/image/motorola.png';
import headphone from '../../assets/image/headphone.png';
import smartphone from '../../assets/image/smartphone.png';
import smartwatch from '../../assets/image/smartwatch.png';
import peliculas from '../../assets/image/peliculas.png';

function Products() {
  useEffect(() => {
    // Inicializa o AOS após o componente ser montado
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="bg-neutral-900 h-auto sm:h-screen w-full mx-auto overflow-hidden">
      <div className="h-10 sm:h-20"></div>
      {/* Logo de Marcas */}
      <div
        className="h-26 sm:h-32 my-10 w-full bg-gradient-to-b from-neutral-700 to-neutral-800"
        data-aos="fade-top" // Animação AOS
      >
        <div className="container mx-auto">
          <Slider {...settings}>
            <div className="flex justify-center items-center h-32">
              <img src={xiaomi} alt="Xiaomi Logo" className="duration-300 transform hover:scale-105 h-28 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center h-28">
              <img src={apple} alt="Apple Logo" className="duration-300 transform hover:scale-105 h-28 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center h-28">
              <img src={samsung} alt="Samsung Logo" className="duration-300 transform hover:scale-105 h-32 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center h-28">
              <img src={jbl} alt="JBL Logo" className="duration-300 transform hover:scale-105 h-32 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center h-28">
              <img src={poco} alt="Poco Logo" className="duration-300 transform hover:scale-105 h-32 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center h-28">
              <img src={motorola} alt="Motorola Logo" className="duration-300 transform hover:scale-105 h-32 w-auto object-contain" />
            </div>
          </Slider>
        </div>
      </div>
      <h1
        className='font-bold text-gray-200 mx-auto text-center text-3xl sm:text-5xl p-10'
        data-aos="fade-down" // Animação AOS
      >
        Produtos
      </h1>
      {/* Card de Produtos */}
      <div className="mx-auto flex flex-wrap justify-center gap-6"
      data-aos="zoom-in" >
        {[
          { src: smartphone, title: 'Celulares' },
          { src: headphone, title: 'Fones de Ouvido' },
          { src: smartwatch, title: 'Relógios' },
          { src: peliculas, title: 'Películas' },
        ].map((item, index) => (
          <div
            key={index}
            className=" 'gradient-diagonal': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', relative max-w-xs overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105"
            data-aos="fade-up" // Animação AOS
          >
            <img className="p-4 w-80 h-80 object-contain" src={item.src} alt={`${item.title} image`} />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent rounded-2xl"></div>
            <div className="relative z-10 p-6">
              <h2 className="text-3xl font-bold text-center text-gray-200 mb-4">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
