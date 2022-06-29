import React from 'react'
import Header from '../Components/Header/Header'

const MyPokemon = () => {
const allMyPokemons = {...localStorage};
console.log(allMyPokemons)

for (const pokemon of allMyPokemons) {
  console.log(`${pokemon} : ${allMyPokemons[pokemon]}`)
}

  return (
    <div className='container flex flex-col w-full max-w-[1280px] m-auto'>
            <Header/>
            <div className="wrapper content-center m-auto justify-center flex flex-wrap gap-10">
                
            </div>
        </div>
  )
}

export default MyPokemon