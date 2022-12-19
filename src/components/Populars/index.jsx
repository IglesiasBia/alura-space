import styles from './Populars.module.scss'
import popularPhotos from './popularPhotos.json'
function Populars(){
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {popularPhotos.map(popularPhoto =>{
                    return(
                        <li>
                            <img src={popularPhoto.path} alt={popularPhoto.alt} />
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
 export default Populars;