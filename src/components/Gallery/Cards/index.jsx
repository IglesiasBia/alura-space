import open from '../open.png'
import favorite from '../favorito.png'

function Card({photo, styles}) {
    return (
        <li key={photo.id} className={styles.galeria__card}>
            <img
                className={styles.galeria__imagem}
                src={photo.imagem}
                alt={photo.titulo}
            />
            <p className={styles.galeria__descricao}>{photo.titulo}</p>
            <div>
                <p>{photo.creditos}</p>
                <span>
                    <img src={favorite} alt='ícone coração de curtir' />
                    <img src={open} alt='ícone de abrir modal' />
                </span>
            </div>
        </li>
    )
}

export default Card;