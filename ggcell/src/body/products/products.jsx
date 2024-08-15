import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import xiaomi from '../../assets/image/XiaomiLogo.png';

function Products() {
  const settings = {
    dots: true, // Mostrar pontos de navegação
    infinite: true, // Rolagem infinita
    speed: 500, // Velocidade da transição
    slidesToShow: 3, // Número de slides visíveis
    slidesToScroll: 1, // Número de slides a rolar
    responsive: [
      {
        breakpoint: 1024, // Quando a largura da tela for menor que 1024px
        settings: {
          slidesToShow: 2, // Mostrar 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Quando a largura da tela for menor que 600px
        settings: {
          slidesToShow: 1, // Mostrar 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="Container bg-blue-950 h-screen w-full mx-auto">
      <div className="h-20"></div>
      <div className="h-40 my-10 bg-black opacity-40">
        <div className="container mx-auto">
          <Slider {...settings}>
            <div style={{ backgroundImage: `url(${xiaomi})` }} className="w-40 h-20">
              {/* Conteúdo do slide 1 */}
            </div>
            <div className="w-40 h-20 bg-blue-600">
              {/* Conteúdo do slide 2 */}
            </div>
            <div className="w-40 h-20 bg-blue-600">
              {/* Conteúdo do slide 3 */}
            </div>

          </Slider>
        </div>
      </div>
      <div className="h-20"></div>
    </section>
  );
}

export default Products;
