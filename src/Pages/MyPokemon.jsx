import React from 'react';
import CardsMyPokemons from '../Components/Cards/CardsMyPokemons';
import Header from '../Components/Header/Header';

const MyPokemon = () => {
const allMyPokemons = {...localStorage};
console.log(allMyPokemons);

const arrayPokemon = Object.keys(allMyPokemons).map((key)=>{
  const arr = JSON.parse(allMyPokemons[key]);
  return [key, arr];
});

  return (
    <div className='container flex flex-col w-full max-w-[1280px] m-auto'>
            <Header/>
            <div className="wrapper content-center m-auto justify-center flex flex-wrap gap-10">
              {arrayPokemon.length < 1 && <p>You don't have a pokemon</p>}
              {arrayPokemon && arrayPokemon.map((pokemon, index)=>(
                <CardsMyPokemons
                key={index}
                name={pokemon[1].name}
                customName={pokemon[0]}
                image={pokemon[1].img}
                type={pokemon[1].type}
                id={pokemon[1].id}
                />
              ))}
            </div>
        </div>
  )
}

export default MyPokemon