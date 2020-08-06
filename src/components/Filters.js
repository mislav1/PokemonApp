import React, { useState } from 'react'
import styles from './Filters.module.css'
import searchIcon from '../assets/img/search.svg'

export default function Filters({ searchByName, getAllPokemons }) {

    const [name, setName] = useState("")

    return (
        <div className={styles.container}>
            <button
                onClick={() => getAllPokemons()}
                className={styles["all-pokemons"]}
            >
                Get All Pokemons
            </button>
            <div className={styles.input}>
                <input type="text" placeholder={"Enter pokemon name"} onChange={(e) => setName(e.target.value)}/>
                <img alt="search" src={searchIcon} onClick={() => searchByName(name)}/>
            </div>

        </div>
    )
}