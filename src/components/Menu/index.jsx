import styles from './Menu.module.scss'
import home from '../../assets/home.png';
import mostLiked from '../../assets/mais-curtidas.png';
import mostViewd from '../../assets/mais-vistas.png';
import newImage from '../../assets/home.png';
import surpriseMe from '../../assets/home.png';



function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="" />
                    <a href="">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostLiked} alt="" />
                    <a href="">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostViewd} alt="" />
                    <a href=""> Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={newImage} alt="" />
                    <a href="">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpriseMe} alt="" />
                    <a href="">Surpreenda-me</a>
                </li>

            </ul>
        </nav>
    )
}

export default Menu;