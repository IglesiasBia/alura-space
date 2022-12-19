import styles from './header.module.scss'
import logo from './logo.png'
import search from './search.png'

function Header(){
    return(
    <header className={styles.cabecalho}>
        <img src={logo} alt="Logo"/>
        <div className={styles.cabecalho__container}>
            <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?" />
            <img src={search} alt="Lupa de pesquisa"/>
        </div>
    </header>
    )
}

export default Header;