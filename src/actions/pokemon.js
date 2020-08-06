import * as types from "./actionTypes";

export function getPokemons(page) {
    return async (dispatch, getState) => {
        
        try {

            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: true});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR, error: ""});

            const pokemonCount = page * 20
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}`)
            const responseData = await response.json()

            let pokemonData = []

            for(let i = 0; i < responseData.results.length; i++){
                const pokemon = responseData.results[i]
                const response = await fetch(pokemon.url)
                const extraPokemonData = await response.json()
                
                pokemonData.push(extraPokemonData)
            }

            dispatch({ type: types.SET_POKEMON_DATA, pokemonData});
            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: false});
            
        } catch (error) {
            console.log(error)

            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: false});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR, error});
        }
    };
}

export function getAllPokemons() {
    return async (dispatch, getState) => {
        
        try {
            dispatch({ type: types.SET_POKEMON_DATA, pokemonData: []});
            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: true});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR, error: ""});

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
            const responseData = await response.json()
            let pokemonData = []

            for(let i = 0; i < responseData.results.length; i++){
                const pokemon = responseData.results[i]
                const response = await fetch(pokemon.url)
                const extraPokemonData = await response.json()
                
                pokemonData.push(extraPokemonData)
            }

            dispatch({ type: types.SET_POKEMON_DATA, pokemonData});
            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: false});
            
        } catch (error) {
            console.log(error)

            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: false});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR, error});
        }
    };
}

export function getPokemonsByName(name) {
    return async (dispatch, getState) => {
        
        try {
            dispatch({ type: types.SET_POKEMON_DATA, pokemonData: []});
            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: true});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR, error: ""});

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const pokemonData = await response.json()

            dispatch({ type: types.SET_POKEMON_DATA, pokemonData: [pokemonData]});
            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: false});
            
        } catch (error) {

            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: false});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR, error:"Pokemon doesn't exist"});
        }
    };
}

export function getPokemonById(id) {
    return async (dispatch, getState) => {
        
        try {

            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: true});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR, error: ""});

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            const pokemonData = await response.json()

            dispatch({ type: types.SET_POKEMON_DATA, pokemonData: [pokemonData]});
            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: false});
            
        } catch (error) {
            console.log(error)

            dispatch({ type: types.SET_LOADING_POKEMONS, loadingPokemons: false});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR, error});
        }
    };
}

export function getPokemonsByType(url) {
    return async (dispatch, getState) => {
        
        try {

            dispatch({ type: types.SET_LOADING_POKEMONS_BY_TYPE, loadingPokemons: true});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR_BY_TYPE, error: ""});

            const response = await fetch(url)
            const responseData = await response.json()

            let pokemonData = []

            pokemonData = responseData.pokemon.map(pokemon => {
                if(pokemon.pokemon && pokemon.pokemon.name){
                    return pokemon.pokemon.name
                }
            })

            dispatch({ type: types.SET_POKEMONS_BY_TYPE, pokemonData});
            dispatch({ type: types.SET_LOADING_POKEMONS_BY_TYPE, loadingPokemons: false});
            
        } catch (error) {
            console.log(error)
            dispatch({ type: types.SET_LOADING_POKEMONS_BY_TYPE, loadingPokemons: false});
            dispatch({ type: types.SET_POKEMON_DATA_ERROR_BY_TYPE, error: error});
        }
    };
}

