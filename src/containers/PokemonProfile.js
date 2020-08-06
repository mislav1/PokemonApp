import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import * as actions from "../actions"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"
import PokemonInfo from "../components/PokemonInfo"
import styles from './PokemonProfile.module.css'

export default function PokemonProfile(props) {

    const dispatch = useDispatch();

    const localActions = {
        getPokemonById: (id) => dispatch(actions.pokemon.getPokemonById(id))
    };

    const globalState = {
        pokemonData: useSelector(state => state.pokemon.pokemonData),
        loadingPokemons: useSelector(state => state.pokemon.loadingPokemons),
        pokemonDataError: useSelector(state => state.pokemon.pokemonDataError)
    };

    useEffect(() => {
        const id = props.match.params.id
        localActions.getPokemonById(id)
    }, [])

    useEffect(() => {
        console.log(globalState.pokemonData)
    }, [globalState.pokemonData])

    return (
        <div className={styles.container}>
            {
                !globalState.loadingPokemons ?
                    <div >
                        {
                            !globalState.pokemonDataError ?
                                <PokemonInfo pokemon={globalState.pokemonData.length > 0 && globalState.pokemonData[0]} />
                                :
                                <ErrorMessage error={globalState.pokemonDataError} />
                        }
                    </div>
                    :
                    <Loader />
            }
        </div>
    )
}