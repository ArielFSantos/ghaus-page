import styles from './body.module.css'
import Home from './Home/home';

function Body(){
    return(
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                <Home/>
                </main>
            </div>
        </>
    )
}
export default Body;