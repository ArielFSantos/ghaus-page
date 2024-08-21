import React from 'react';
import img1 from '../../assets/image-social/image1.png';
import img2 from '../../assets/image-social/image2.png';
import img3 from '../../assets/image-social/image3.png';
import img4 from '../../assets/image-social/image4.png';
import img5 from '../../assets/image-social/image5.png';
import img6 from '../../assets/image-social/image6.png';
import img7 from '../../assets/image-social/image7.png';
import img8 from '../../assets/image-social/image8.png';
import img9 from '../../assets/image-social/image9.png';
import img10 from '../../assets/image-social/image10.png';

function Social() {
  return (
    <div className="h-screen w-full">
      <h1 className="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">Masonry Layout</h1>
      <div className=" flex flex-wrap sm:columns-5 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img1} alt="Descrição da imagem 1" className="w-full h-auto" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img2} alt="Descrição da imagem 2" className="w-full h-auto" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img3} alt="Descrição da imagem 3" className="w-full h-auto" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img4} alt="Descrição da imagem 4" className="w-full h-auto" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img5} alt="Descrição da imagem 5" className="w-full h-auto" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img6} alt="Descrição da imagem 6" className="w-full h-auto" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img7} alt="Descrição da imagem 6" className="w-full h-auto" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img8} alt="Descrição da imagem 6" className="w-full h-auto" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img9} alt="Descrição da imagem 6" className="w-full h-auto" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <img src={img10} alt="Descrição da imagem 6" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Social;
