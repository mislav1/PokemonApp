import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './TypesModal.module.css'
import { useSelector, useDispatch } from "react-redux"
import * as actions from "../actions"
import Loader from "./Loader"
import ErrorMessage from "./ErrorMessage"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "350px",
        display: "flex",
        justifyContent: "center"
    }
};
Modal.setAppElement('body')

export default function TypesModal({ openModal, closeModal, type, url }) {

    const dispatch = useDispatch();

    const localActions = {
        getPokemonsByType: (url) => dispatch(actions.pokemon.getPokemonsByType(url))
    };

    const globalState = {
        pokemonsByType: useSelector(state => state.pokemon.pokemonsByType),
        loadingPokemonsByType: useSelector(state => state.pokemon.loadingPokemonsByType),
        pokemonDataErrorByType: useSelector(state => state.pokemon.pokemonDataErrorByType),
    };

    useEffect(() => {
        localActions.getPokemonsByType(url)
    }, [])

    return (
        <div>
            <Modal
                isOpen={openModal}
                style={customStyles}
            >
                <div className={styles.container}>
                    <div>{`Pokemons with type ${type}`}</div>
                    {
                        !globalState.pokemonDataErrorByType ?
                            <div className={styles["scrollable-div"]}>
                                {
                                    globalState.pokemonsByType.map((pokemon, index) => {
                                        return <p key={pokemon + index}>{pokemon}</p>
                                    })
                                }
                            </div>
                            :
                            <ErrorMessage error={globalState.pokemonDataErrorByType} />
                    }
                    {
                        globalState.loadingPokemonsByType &&
                        <Loader />
                    }

                    <button className={styles["close-modal"]} onClick={closeModal}>Close</button>
                </div>
            </Modal>
        </div>
    )
}