import { useEffect } from "react";

function Contact() {
  useEffect(() => {
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
      <h1 className="font-bold text-gray-200 text-center text-3xl sm:text-5xl mb-10">
        Siga nosso Instagram
      </h1>
      <section className="w-full max-w-4xl flex justify-center bg-neutral-100 rounded-lg shadow-lg p-10">
        <blockquote
          className="instagram-media w-full max-w-[600px]"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/C9x43_ePisZ/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
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
