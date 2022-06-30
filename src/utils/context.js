import React from "react";
import { useState } from "react";
export const PokemonContext = React.createContext(null);

export const ContextWrapper = (props) => {
    const [pokemons, setPokemons] = useState([]);

    return (
        <PokemonContext.Provider value={{ pokemons, setPokemons }}>
            {props.children}
        </PokemonContext.Provider>
    )
}