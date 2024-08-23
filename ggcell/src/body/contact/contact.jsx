import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa o CSS para as animações

function Contact() {
  useEffect(() => {
    // Inicializa o AOS após o componente ser montado
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
    });

    // Carrega o script do Instagram após o componente ser montado
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    script.onload = () => {
      window.instgrm.Embeds.process(); // Processa os embeds após o script carregar
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center py-10">
      <h1
        className=" font-heading font-bold text-gray-200 text-center text-3xl sm:text-5xl mb-10"
        data-aos="fade-down" // Animação AOS
      >
        Siga nosso Instagram
      </h1>
      <section
        className="w-full max-w-6xl flex justify-center bg-neutral-300  rounded-lg shadow-lg p-6"
        data-aos="fade-up" // Animação AOS
      >
        <blockquote
          className="instagram-media w-full max-w-[600px]"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/C9x43_ePisZ/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          data-aos="fade-down"
           
        >
          <div className="p-4">
            <a
              href="https://www.instagram.com/reel/C9x43_ePisZ/?utm_source=ig_embed&amp;utm_campaign=loading"
              className="block bg-white text-center mx-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Conteúdo do embed do Instagram */}
            </a>
          </div>
        </blockquote>
      </section>
    </div>
  );
}

export default Contact;
