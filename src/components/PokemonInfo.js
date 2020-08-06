import React, { useState } from 'react'
import styles from './PokemonInfo.module.css'
import Slider from './Slider'
import TypesModal from './TypesModal'
import { Link } from 'react-router-dom'

export default function PokemonInfo({ pokemon }) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [type, setType] = useState("")
    const [url, setUrl] = useState("")

    const openTypeModal = (type, url) => {
        setType(type)
        setUrl(url)
        setIsModalOpen(true)
    }

    return (
        <div className={styles.container}>
            {
                pokemon.sprites &&
                <Slider pokemon={pokemon} />
            }
            <div className={styles.info}>
                <label>Name:</label>
                <p>{pokemon.name}</p>

                <label>Height:</label>
                <p>{pokemon.height}</p>

                <label>Weight:</label>
                <p>{pokemon.weight}</p>

                {
                    pokemon.types &&
                    <div>
                        <label>Types:</label>
                        <ul>
                            {
                                pokemon.types.map(type =>
                                    <li
                                        key={type.type.name}
                                        onClick={() => openTypeModal(type.type.name, type.type.url)}
                                    >
                                        {type.type.name}
                                    </li>)
                            }
                        </ul>
                    </div>
                }
                <Link className={styles.link} to={"/"}>Go To Home Page</Link>
            </div>
            {
                isModalOpen &&
                <TypesModal
                    openModal={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                    type={type}
                    url={url}
                />
            }
        </div>
    )
}