//reducers
import React, { createContext, useReducer, useState } from 'react';
import { combineReducers } from 'redux';
import { initialEvents } from '../data/functions'; //Evenements initialles qui se chargent au lancement de l'App

const randomutility = (state = [], action) => {
    // const [iduser, SetIduser] = useState();
    switch (action.type) {
        case 'SELECT-BARBER':
            state = { 'event': [action.event][0], 'id': sessionStorage['id'] }; //Encapsuler dans une [] pour pouvoir l'utiliser dans le calendrier
            return state;
        case 'SELECT-ALL-BARBER':
            state = { 'event': initialEvents(), 'id': sessionStorage['id'] };
            return state;
        case 'USER-CONNECT':
            state = { 'event': initialEvents(), 'id': sessionStorage['id'] };
            // state = { 'id': sessionStorage['id'] };
            return state;
        case 'USER-CONNECT-NOT':
            state = { 'event': initialEvents(), 'id': sessionStorage['id'] };
            return state;
        case 'USER-SCHEDULE-ADD':
            state = { 'event': [action.event][0], 'id': sessionStorage['id'] };
            return state;
        default:
            state = { 'event': initialEvents(), 'id': sessionStorage['id'] };
            return state;
    }
}

const myReducers = combineReducers({ randomutility });
export default myReducers;

// creation du Context dans lequel l'App se trouvera
export const AppContext = createContext(null);

//Creation du composant AppProvider qui englobera notre App (<App/>)
//Et passage des valeurs(props) coe param aux elements enfants(props.children) contenue dans tous les autres composants
export const AppProvider = (props) => {
    //state prend la valeur initialle par defaut et dispatch s'occupe de l'action a effectuer a travers une fonction bien definit
    const [state, dispatch] = useReducer(randomutility, initialEvents());

    return (
        <AppContext.Provider
            value={{
                randomutility: state,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
