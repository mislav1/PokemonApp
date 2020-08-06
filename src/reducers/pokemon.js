import { combineReducers } from "redux";
import * as types from "../actions/actionTypes";

const pokemonData = (state = [], action) => {
    switch (action.type) {
        case types.SET_POKEMON_DATA:
            return action.pokemonData;
        default:
            return state;
    }
};

const pokemonDataError = (state = "", action) => {
    switch (action.type) {
        case types.SET_POKEMON_DATA_ERROR:
            return action.error;
        default:
            return state;
    }
};

const loadingPokemons = (state = false, action) => {
    switch (action.type) {
        case types.SET_LOADING_POKEMONS:
            return action.loadingPokemons;
        default:
            return state;
    }
};

const pokemonDataErrorByType = (state = "", action) => {
    switch (action.type) {
        case types.SET_POKEMON_DATA_ERROR_BY_TYPE:
            return action.error;
        default:
            return state;
    }
};

const loadingPokemonsByType = (state = false, action) => {
    switch (action.type) {
        case types.SET_LOADING_POKEMONS_BY_TYPE:
            return action.loadingPokemons;
        default:
            return state;
    }
};

const pokemonsByType = (state = [], action) => {
    switch (action.type) {
        case types.SET_POKEMONS_BY_TYPE:
            return action.pokemonData;
        default:
            return state;
    }
};

export default combineReducers({
    pokemonData,
    pokemonDataError,
    loadingPokemons,
    pokemonsByType,
    loadingPokemonsByType,
    pokemonDataErrorByType
});