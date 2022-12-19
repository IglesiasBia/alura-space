import styles from "./InitialPage.module.scss"

import Header from "components/header";
import Menu from "components/Menu";
import Banner from "components/Banner";
import Gallery from "components/Gallery";
import Populars from "components/Populars";


function InitialPage(){
    return (
        <>

            <Header/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <Banner/>
                </section>
            </main>
            <div className={styles.galeria}>
                <Gallery/>
                <Populars/>
            </div>
        </>
    )
}

export default InitialPage;