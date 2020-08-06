import React from 'react'
import { useHistory } from "react-router-dom"
import styles from './PokemonCard.module.css'

export default function ListPokemon({pokemon}) {

    const history = useHistory()

    return (
        <div 
            className={styles.container}
            onClick={() => history.push(`/detail/${pokemon.id}`)}
        >
            <img src={pokemon.sprites.front_default} alt="Pokemon"/>
            <p>{pokemon.name}</p>
            <p>{"Order: " + pokemon.order}</p>
        </div>
    )
}