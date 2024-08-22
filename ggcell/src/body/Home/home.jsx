import logoImage from '../../assets/image/GG.png';
import bgHome from '../../assets/image/bgHome.jpg';

function Home() {
    return (

            <div
                className="   relative h-screen w-auto flex flex-col items-center bg-cover bg-center bg-blend-overlay justify-center mx-auto text-center"
                style={{
                    backgroundImage: `url(${bgHome}), radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%)`,
                }}
            >
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 0 }}></div>

                <div className="relative z-10">
                    <div
                        className="w-80 h-52 bg-no-repeat bg-cover bg-top mx-auto"
                        style={{ backgroundImage: `url(${logoImage})` }}
                    />
                    <p className=' font-bold text-gray-200 p-2 text-2xl sm:text-3xl'> Celulares e Acessórios para Todos os Estilos.</p>
                    <h1 className=" text-white p-2 text-xl">
                         10x <strong>Sem juros</strong> ou <strong>Desconto</strong> á Vista
                    </h1>
                    <h2 className='text-white '><strong>Frete Gratis</strong> Goiânia</h2>
                    <a href="">
                        <button
                            className='p-4 mt-1 bg-green-500 hover:bg-green-800 font-bold text-white rounded-full'
                        >
                            Fale Com o vendedor
                        </button>
                    </a>
                </div>
            </div>

    );
}

export default Home;
