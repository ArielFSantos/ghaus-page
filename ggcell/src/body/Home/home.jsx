import logoImage from '../../assets/image/GG.png';



function Home(){
    return(
        <>
        <div className="bg-gray-950 h-screen flex flex-col items-center justify-center text-center">
            <div>
                <div
                    className="w-72 h-48 bg-no-repeat bg-contain bg-center"
                    style={{ backgroundImage: `url(${logoImage})` }}
                />
                <h1 className="mt-4 text-white text-2xl">
                    Frete Grátis Goiania e Região
                </h1>
            </div>
        </div>
    </>
    )
}
export default Home;