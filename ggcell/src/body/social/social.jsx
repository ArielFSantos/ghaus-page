import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS para as animações

// Importação das imagens
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

// Array de imagens
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

// Componente para imagem
const ImageItem = ({ src, alt }) => (
  <div className="break-inside-avoid" data-aos="fade-up">
    <img
      src={src}
      alt={alt}
      className="w-40 sm:w-52 h-auto p-0 object-cover transition-transform duration-300 transform hover:scale-105"
    />
  </div>
);

function Social() {
  useEffect(() => {
    // Inicializa o AOS após o componente ser montado
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
    });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 border-0">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-center pt-20 text-3xl sm:text-5xl font-bold text-gray-200 mb-10" data-aos="fade-down">
          Comentarios
        </h1>
        <div className="flex flex-wrap justify-center gap-3 lg:px-36">
          {images.map((img, index) => (
            <ImageItem
              key={index}
              src={img}
              alt={`Descrição da imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Social;
