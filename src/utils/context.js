import React, { useEffect, useReducer } from "react";
import { useState } from "react";
export const PokemonContext = React.createContext(null);

export const ContextWrapper = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [detailPokemon, setDetailPokemon] = useState([]);
    const [myPokemon, setMyPokemon] = useState([])

    // useEffect(()=>{
    //     if(localStorage.getItem('listMyPokemon')){
    //         const retrivePokemon = JSON.parse(localStorage.getItem('listMyPokemon'));
    //         retrivePokemon && setMyPokemon(retrivePokemon)
    //         console.log(myPokemon)
    //     } 
    // },[])

    return (
        <PokemonContext.Provider value={{ pokemons, setPokemons, detailPokemon, setDetailPokemon, myPokemon,setMyPokemon }}>
            {props.children}
        </PokemonContext.Provider>
    )
}