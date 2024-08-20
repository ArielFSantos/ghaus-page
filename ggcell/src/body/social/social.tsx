import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

// Função para importar todas as imagens da pasta
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../../photos', false, /\.(png|jpe?g|svg|webp)$/));

function Social() {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const onOpenModal = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const onCloseModal = () => setOpen(false);

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <div className="p-4">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto overflow-hidden"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer transform transition-transform duration-200 text-center"
              onClick={() => onOpenModal(index)}
            >
              <img
                src={src}
                alt={`Comentário ${index + 1}`}
                className="w-full rounded-lg shadow-md transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </Masonry>
      </div>

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'max-w-full w-full p-0 bg-transparent shadow-none',
        }}
      >
        <div className="flex items-center justify-center relative">
          <button
            onClick={handlePrev}
            className="bg-white bg-opacity-50 border-none text-black text-2xl cursor-pointer p-6 rounded-full z-10 transition-bg duration-300 absolute top-1/2 transform -translate-y-1/2 left-2 hover:bg-white focus:outline-none"
          >
            &#10094;
          </button>
          <img
            src={images[selectedImageIndex]}
            alt={`Comentário ${selectedImageIndex + 1}`}
            className="w-auto max-w-full max-h-[90vh] object-contain"
          />
          <button
            onClick={handleNext}
            className="bg-white bg-opacity-50 border-none text-black text-2xl cursor-pointer p-6 rounded-full z-10 transition-bg duration-300 absolute top-1/2 transform -translate-y-1/2 right-2 hover:bg-white focus:outline-none"
          >
            &#10095;
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Social;
