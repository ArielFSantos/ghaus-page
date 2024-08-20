import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';


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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-neutral-900 h-auto sm:h-screen w-full mx-auto">
      <div className="h-10 sm:h-20"></div>
      {/* Logo de Marcas */}
      <div className="h-26 sm:h-32 my-10 w-full bg-gradient-to-b from-neutral-700 to-neutral-800">
        <div className="container mx-auto">
          <Slider {...settings}>
            <div className="flex justify-center items-center h-32">
              <img src={xiaomi} alt="Xiaomi Logo" className="h-28 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center h-28">
              <img src={apple} alt="Apple Logo" className="h-28 w-auto object-contain" />
            </div>
            <div className=" flex justify-center items-center h-28">
              <img src={samsung} alt="Samsung Logo" className=" h-32 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center h-28">
              <img src={jbl} alt="JBL Logo" className="h-32 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center h-28">
              <img src={poco} alt="Poco Logo" className="h-32 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center h-28">
              <img src={motorola} alt="Motorola Logo" className="h-32 w-auto object-contain" />
            </div>
          </Slider>
        </div>
      </div>
      <h1 className='font-bold text-gray-200 mx-auto text-center text-3xl sm:text-5xl p-10' >Produtos</h1>
      {/* Card de Produtos */}
      <div className="mx-auto flex flex-wrap justify-center gap-6">
  {[
    { src: smartphone, title: 'Celulares' },
    { src: headphone, title: 'Fones de Ouvido' },
    { src: smartwatch, title: 'Relógios' },
    { src: peliculas, title: 'Películas' },
  ].map((item, index) => (
    <div
      key={index}
      className="relative max-w-xs overflow-hidden rounded-2xl  shadow-lg transition-transform duration-300 transform hover:scale-105"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <img className=" p-4 w-80 h-80 object-contain" src={item.src} alt={`${item.title} image`} />
      <div className=" absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent rounded-2xl"></div>
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
