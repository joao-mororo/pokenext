import Image from "next/image"
import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async () => {
    const maxPokemons = 251
    const api = `https://pokeapi.co/api/v2/pokemon/`
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
  
    const data = await res.json()
  
    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: index.toString() },
        }
    })
  
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId
  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
    const data = await res.json()
  
    return {
        props: { pokemon: data },
    }
  }

export default function Pokemon ({ pokemon }) {
    const imageURL = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }
    return (
        <div className={styles.pokemon_container}>
            <p>#{pokemon.id < 10 && '0'}{pokemon.id < 100 && '0'}{pokemon.id}</p>
            <Image
                src={imageURL(pokemon.id)}
                width="250"
                height="250"
                alt={pokemon.name}
            />
            <h1 className={styles.title}>{pokemon.name}</h1>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span 
                            key={index} 
                            className={`${styles.type} ${styles['type_' + item.type.name]}`}
                        >
                            {item.type.name}
                        </span>
                    ))}
                </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}