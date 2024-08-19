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
    <section className="bg-blue-950 h-auto sm:h-screen w-full mx-auto">
      <div className="h-20"></div>
      {/* Logo de Marcas */}
      <div className="h-26 sm:h-32 my-10 w-full bg-gradient-to-b from-zinc-600 to-zinc-950">
        <div className="container mx-auto">
          <Slider {...settings}>
            <div className="flex justify-center items-center h-28">
              <div
                style={{ backgroundImage: `url(${xiaomi})` }}
                className="w-28 h-28 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Xiaomi */}
              </div>
            </div>
            <div className="flex justify-center items-center h-28">
              <div
                style={{ backgroundImage: `url(${apple})` }}
                className="w-28 h-28 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Apple */}
              </div>
            </div>
            <div className="flex justify-center items-center h-28">
              <div
                style={{ backgroundImage: `url(${jbl})` }}
                className="w-28 h-28 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo JBL */}
              </div>
            </div>
            <div className="flex justify-center items-center h-28">
              <div
                style={{ backgroundImage: `url(${samsung})` }}
                className="w-28 h-28 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Samsung */}
              </div>
            </div>
            <div className="flex justify-center items-center h-28">
              <div
                style={{ backgroundImage: `url(${poco})` }}
                className="w-28 h-28 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Poco */}
              </div>
            </div>
            <div className="flex justify-center items-center h-28">
              <div
                style={{ backgroundImage: `url(${motorola})` }}
                className="w-28 h-28 bg-contain bg-no-repeat bg-center"
              >
                {/* Logo Motorola */}
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="h-20"></div>
      {/* Card de Produtos */}
      <div className="mx-auto flex flex-wrap">
        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400" alt="Card image" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Celulares</h2>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400" alt="Card image" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Fones de Ouvido</h2>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400" alt="Card image" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Relógios</h2>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400" alt="Card image" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Películas</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
