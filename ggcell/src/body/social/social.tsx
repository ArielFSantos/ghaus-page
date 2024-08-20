import React from "react";

// Importe suas imagens PNG com o caminho correto
import img1 from '../../assets/image-social/image1.png'; // Verifique a extensão e o caminho
import img2 from '../../assets/image-social/image2.png';
import img3 from '../../assets/image-social/image3.png';
import img4 from '../../assets/image-social/image4.png';
import img5 from '../../assets/image-social/image5.png';
import img6 from '../../assets/image-social/image6.png';

function Social() {
  return (
    <div className="h-screen w-full">
      <h1 className="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">Masonry Layout</h1>
      <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
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
      </div>
    </div>
  );
}

export default Social;
