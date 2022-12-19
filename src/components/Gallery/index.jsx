import styles from './Gallery.module.scss'
import Tags from "../Tags";
import photos from './photos.json'
import List from './List';
import { useState } from 'react';

function Gallery(){
    const [photosItens, setPhotosItens] = useState(photos);
    const tags = [...new Set(photos.map(photo => photo.tag))];

    const filterPhotos = (tag) => {
        const filteredPhotos = photos.filter(photo =>{
            return photo.tag === tag
        })
        setPhotosItens(filteredPhotos)
        console.log(filteredPhotos)
    }

    return(
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filterPhotos={filterPhotos} setPhotosItens={setPhotosItens}/>
            <List styles={styles} photos={photosItens}/>
        </section>
    )
}

export default Gallery;