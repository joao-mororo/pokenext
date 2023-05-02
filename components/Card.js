import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Card.module.css'

const Card = ({ pokemon }) => {
    const imageURL = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }

    return (
        <div className={styles.card}>
            <Image
                // src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                src={imageURL(pokemon.id)}
                width="170"
                height="170"
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} className={styles.btn}>Detalhes</Link>
        </div>
    )
}

export default Card