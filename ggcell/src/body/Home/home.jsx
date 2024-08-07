import styles from './home.module.css'
function Home(){
    return(
        <>
            <div className={styles.background}>
                <div className={styles.logo}/>
                <h1>
                    <span>Frete </span> 
                    <span>Grátis </span> 
                    Goiania e Região</h1>
            </div>
        </>
    )
}
export default Home;