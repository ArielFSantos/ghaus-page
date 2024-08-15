import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import xiaomi from '../../assets/image/XiaomiLogo.png';
import apple from '../../assets/image/Apple.png';
import jbl from '../../assets/image/JBL.png';
import samsung from '../../assets/image/samsung.png';
import poco from '../../assets/image/poco.png';
import motorola from '../../assets/image/motorola.png';

function Products() {
  const settings = {
    dots: false, // Esconde os pontos de navegação
    infinite: true, // Rolagem infinita
    speed: 500, // Velocidade da transição
    slidesToShow: 5, // Número de slides visíveis
    slidesToScroll: 1, // Número de slides a rolar
    autoplay: true, // Ativar rotação automática
    autoplaySpeed: 2000, // Tempo de rotação (2 segundos)
    responsive: [
      {
        breakpoint: 1024, // Quando a largura da tela for menor que 1024px
        settings: {
          slidesToShow: 4, // Mostrar 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Quando a largura da tela for menor que 600px
        settings: {
          slidesToShow: 3, // Mostrar 3 slides em dispositivos móveis
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-blue-950 h-screen w-full mx-auto">
      <div className="h-20"></div>
      <div className="h-36 sm:h-40 my-10 w-full bg-gradient-to-b from-gray-700 to-gray-300 border-t-gray-950 ">
        <div className="container mx-auto">
          <Slider {...settings}>
            <div className="flex justify-center items-center">
              <div 
                style={{ backgroundImage: `url(${xiaomi})`}} 
                className="w-full h-40 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Xiaomi */}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div 
                style={{ backgroundImage: `url(${apple})`}} 
                className="w-full h-40 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Apple */}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div 
                style={{ backgroundImage: `url(${jbl})`}} 
                className="w-full h-40 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo JBL */}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div 
                style={{ backgroundImage: `url(${samsung})`}} 
                className="w-full h-40 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Samsung */}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div 
                style={{ backgroundImage: `url(${poco})`}} 
                className="w-full h-40 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Poco */}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div 
                style={{ backgroundImage: `url(${motorola})`}} 
                className="w-full h-40 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Motorola */}
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="h-20"></div>
    </section>
  );
}

export default Products;
