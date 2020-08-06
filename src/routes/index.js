import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import ListPokemons from '../containers/ListPokemons'
import PokemonProfile from '../containers/PokemonProfile';
import NotFound from '../components/NotFound';

import createRootReducer from "../reducers";

const preloadedState = undefined;

const store = createStore(
    createRootReducer(),
    preloadedState,
    compose(applyMiddleware(ReduxThunk))
);

export default function Routes() {
    return (
        <Provider store={store}>
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    <Route path="/" exact component={ListPokemons} />
                    <Route path="/detail/:id" exact component={PokemonProfile} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )

}