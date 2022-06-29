import { React, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { PokemonContext } from '../utils/context.js'
import axios from 'axios'
import Header from '../Components/Header/Header.jsx';

const PokemonDetail = () => {
  const context = useContext(PokemonContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailAbility, setDetailAbility] = useState([]);


  const detailPokemonById = context.pokemons[`${id}` - 1];
  const ability = detailPokemonById.abilities[0].ability.name
  // console.log(ability)
  const getDetailAbility = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`)
    setDetailAbility(response.data.effect_entries[1].effect)
  }

  console.log(detailAbility)
  console.log(typeof (effect))

  function capitalizeName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  };

  const probality = ()=>{
    if(Math.random() < 0.5){
      return 0
    }else{
      return 1
    }
  }

  const catchHandler = () =>{
    const prob = probality();
    if(prob === 1){
      console.log('Tertangkap permisahhh')
    }else{
      console.log('Coba lagi')
    }
  }


  useEffect(() => {
    getDetailAbility()
  }, [])
  console.log(context.pokemons)
  const styledetail = ` ${detailPokemonById.types[0].type.name}`

  return (
    <div className={styledetail}>
    <div className='lg:w-full lg:h-full lg:max-w-[1024px] w-[400px] md:w-[760px] content-center m-auto justify-center flex'>
      <div className="wrapper h-full flex flex-col">
        <Header/>
        <div className="title lg:mt-10 flex justify-center lg:justify-between mb-10 content-center">
          <div className="name">
            <p className='p-[2px] text-center  text-white font-medium text-sm rounded-md bg-red-300'>#{detailPokemonById.id}</p>
            <p className='text-2xl text-slate-700 mt-2 font-semibold'>{capitalizeName(detailPokemonById.name)}</p>
          </div>
        </div>
        <div className="detailWrapper flex flex-col md:flex-row m-auto content-center align-middle">
          <div className="detailText w-fit flex flex-col gap-1 justify-center">
            <span className='flex'>
              <p className='text-slate-700 font-semibold text-md'>Height : </p>
              <p className='text-slate-600 font-medium'> {detailPokemonById.height}"</p>
            </span>
            <span className='flex'>
              <p className='text-slate-700 font-semibold text-md'>Weight :</p>
              <p className='text-slate-600 font-medium'>{detailPokemonById.weight}kg</p>
            </span>
            <span className='flex'>
              <p className='text-slate-700 font-semibold text-md'>Type : </p>
              <p className='text-slate-600 font-medium'>{capitalizeName(detailPokemonById.types[0].type.name)}"</p>

            </span>
          </div>
          <div className="imgPokemon flex-2 lg:mr-20 lg:ml-20 justify-center align-middle content-center">
            <img className='sm:w-80 md:w-full' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
          </div>
          <div className="bioPokemon flex-1 content-center justify-center m-auto ">
            <p className='text-md text-slate-700 font-semibold'>Bio</p>
            <p className='text-justify text-base mt-5 text-slate-700'>{capitalizeName(detailPokemonById.name)} have a ability {ability}. {truncateString(detailAbility, 200)} </p>
          </div>
        </div>
        <div className="buttonContainer flex m-auto">
        <button 
        className='bg-sky-600 px-2 py-2 text-white font-medium rounded-md my-10 md:mb-5'
        onClick={catchHandler}
        >Catch Pokemon</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PokemonDetail