import Image from "next/image"

import styles from '../styles/About.module.css'

const about = () => {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Um projeto feito em Next para consulta de diferentes pokemons e seus atributos. Feito com o objetivo de construir portfolio e praticar NextJS</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
        </div>
    )
}

export default about