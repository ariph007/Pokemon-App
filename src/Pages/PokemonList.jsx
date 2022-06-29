import { React, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {PokemonContext} from '../utils/context.js'
import Cards from '../Components/Cards/Cards';
import Header from '../Components/Header/Header.jsx';

const PokemonList = () => {
    const context = useContext(PokemonContext);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    const getPokemons = async () => {
        const res = await axios.get(loadMore);
        const data = res.data;
        setLoadMore(data.next);

        function createPokemon(result) {
            result.forEach(async (pokemon) => {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.data;
                context.setPokemons((currentList) => [...currentList, data]);
            });
        }
        createPokemon(data.results);
    };


    useEffect(() => {
        getPokemons();
        // console.log(context.myPokemon)
    }, []);

    return (

        <div className='container flex flex-col w-full max-w-[1280px] m-auto'>
            <Header/>
            <div className="wrapper content-center m-auto justify-center flex flex-wrap gap-10">
                {context.pokemons.map((pokemon, i) => (
                    <Cards
                        key={i}
                        id={pokemon.id}
                        name={pokemon.name}
                        type={pokemon.types[0].type.name}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    />
                ))}
            </div>
            <button className='mt-10 mb-5 border-slate-500 bg-cyan-500 px-4 text-slate-50 py-2 w-fit flex justify-center content-center m-auto' onClick={getPokemons}>Load More</button>
        </div>
    )
}

export default PokemonList
