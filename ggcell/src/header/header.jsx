import styles from './header.module.css';

function Header() {
  return (
    <>
      <span className={styles.container}>
        <div className={styles.logo}/>
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li>
                  <a href="#">Topico 1</a>
                </li>
                <li>
                  <a href="#">Topico 2</a>
                </li>
                <li>
                  <a href="#">Topico 3</a>
                </li>
                <li>
                  <a href="#">Topico 4</a>
                </li>
            </ul>
        </nav>
      </span>
    </>
  );
}

export default Header;
