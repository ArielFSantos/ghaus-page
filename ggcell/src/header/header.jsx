import styles from './header.module.css';

function Header() {
  return (
    <>
      <span className={styles.container}>
        <div className={styles.logo}/>
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li>
                  <a href="#">Tela Inicial</a>
                </li>
                <li>
                  <a href="#">Produtos</a>
                </li>
                <li>
                  <a href="#">Comentarios</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
            </ul>
        </nav>
      </span>
    </>
  );
}

export default Header;
