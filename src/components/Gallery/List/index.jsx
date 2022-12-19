import Card from "../Cards";

function List({styles, photos}){
    return(
        <ul className={styles.galeria__cards}>
            {photos.map(photo => {
                return <Card styles={styles} photo={photo}/>
            })}
        </ul>
    )
}

export default List;