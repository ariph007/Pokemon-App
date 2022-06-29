import React from "react";
import { useState } from "react";
export const PokemonContext = React.createContext(null);

export const ContextWrapper = (props) =>{
    const [pokemons, setPokemons] = useState([]);
    const [detailPokemon, setDetailPokemon] = useState([]);
    
    return(
        <PokemonContext.Provider value={{pokemons, setPokemons, detailPokemon, setDetailPokemon}}>
            {props.children}
        </PokemonContext.Provider>
    )
}