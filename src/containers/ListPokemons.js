import React, { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as actions from "../actions"
import PokemonCard from "../components/PokemonCard"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"
import Filters from "../components/Filters"
import styles from './ListPokemons.module.css'

export default function ListPokemon() {

    const page = useRef(1)
    const dispatch = useDispatch();

    const localActions = {
        getPokemons: (page) => dispatch(actions.pokemon.getPokemons(page)),
        getAllPokemons: () => dispatch(actions.pokemon.getAllPokemons()),
        getPokemonsByName: (name) => dispatch(actions.pokemon.getPokemonsByName(name))
    };

    const globalState = {
        pokemonData: useSelector(state => state.pokemon.pokemonData),
        loadingPokemons: useSelector(state => state.pokemon.loadingPokemons),
        pokemonDataError: useSelector(state => state.pokemon.pokemonDataError)
    };

    useEffect(() => {
        localActions.getPokemons(page.current)
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onScroll = () => {
        if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && !globalState.loadingPokemons) {
            localActions.getPokemons(page.current)
            page.current = page.current + 1
        }
    };

    const getAllPokemons = () => {
        localActions.getAllPokemons()
    }

    const searchByName = (name) => {
        name ? localActions.getPokemonsByName(name) : localActions.getPokemons(page.current)
    }

    return (
        <div>
            {
                !globalState.pokemonDataError &&
                <Filters 
                    getAllPokemons={getAllPokemons}
                    searchByName={searchByName}
                />
            }

            <div className={styles["grid-container"]} >
                {
                    !globalState.pokemonDataError &&
                        globalState.pokemonData.map(pokemon =>
                            < PokemonCard key={pokemon.id} pokemon={pokemon} />
                        )
                }
                {
                    globalState.pokemonDataError &&
                    <ErrorMessage error={globalState.pokemonDataError} />
                }
            </div>
            {
                globalState.loadingPokemons &&
                <Loader setClass={"middle"} />
            }
        </div>
    )
}