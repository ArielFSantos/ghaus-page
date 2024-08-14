import logoImage from '../../assets/image/GG.png';
import bgHome from '../../assets/image/bgHome.jpg';

function Home() {
    return (
        <>
            <div
                className="  relative h-screen w-auto flex flex-col items-center justify-center mx-auto text-center"
                style={{
                    backgroundImage: `url(${bgHome}), radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay' // Ajusta como o gradiente é combinado com a imagem
                }}
            >
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 0 }}></div>

                <div className="relative z-10">
                    <div
                        className="w-80 h-80 bg-no-repeat bg-contain bg-center mx-auto"
                        style={{ backgroundImage: `url(${logoImage})` }}
                    />
                    <p className='text-white p-2 text-2xl'> Venda de celulares e acessorios de todas as marcas</p>
                    <h1 className="mt-4 text-white p-2 text-2xl">
                        Frete Grátis Goiânia e Região
                    </h1>
                    <a href="">
                        <button
                            className='p-4 bg-green-500 hover:bg-gray-900  font-serif font-bold text-white rounded-full'
                        >
                            Fale com um vendedor
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home;
