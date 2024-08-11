function Home(){
    return(
        <>
        <div className="bg-gray-950 h-screen flex flex-col items-center justify-center text-center">
            <div
                className="w-72 h-48 bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: "url('../../assets/image/GG.png')" }}
            />
            <h1 className="mt-4 text-white text-2xl">
                <span>Frete </span>
                <span>Grátis </span>
                Goiania e Região
            </h1>
        </div>
    </>
    )
}
export default Home;