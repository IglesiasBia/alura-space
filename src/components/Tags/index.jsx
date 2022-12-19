import styles from './Tags.module.scss';
import photos from '../Gallery/photos.json'
function Tags({tags, filterPhotos, setPhotosItens}){
    return(
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map(tag => {return( <li key={tag} onClick={() => filterPhotos(tag)}>{tag}</li>)})}
                <li onClick={() => setPhotosItens(photos)}>Todas</li>
            </ul>
        </div>
    )
}

export default Tags;