import { React, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { PokemonContext } from '../utils/context.js';
import axios from 'axios';
import Header from '../Components/Header/Header.jsx';


const PokemonDetail = () => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const [namedPokemon, setNamedPokemon] = useState('');
  const [failedPopUp, setFailedPopUp] = useState(false);
  const [listLocal, setListLocal] = useState([]);
  const context = useContext(PokemonContext);
  const { id } = useParams();
  const [detailAbility, setDetailAbility] = useState([]);
  const detailPokemonById = context.pokemons[`${id}` - 1];
  const pokemonName = detailPokemonById.name;
  const pokemonType = detailPokemonById.types[0].type.name;
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const ability = detailPokemonById.abilities[0].ability.name;
  const styledetail = ` ${detailPokemonById.types[0].type.name}`


  const getDetailAbility = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`)
    setDetailAbility(response.data.effect_entries[1].effect)
  }

  const capitalizeName = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  };

  const probality = () => {
    if (Math.random() < 0.5) {
      return 0
    } else {
      return 1
    }
  };

  const catchHandler = () => {
    setPopUp(!popUp);
    const prob = probality();
    if (prob === 1) {
      const list = {
        'name': `${pokemonName}`,
        'img': `${pokemonImg}`,
        'type': `${pokemonType}`,
        'id': `${id}`
      }
      setListLocal(list);

    } else {
      setPopUp(false);
      setFailedPopUp(!failedPopUp);
    }
  };

  const saveHandler = (e) => {
    e.preventDefault();
    if (namedPokemon === '') {
      window.alert("Name cannot be empty");
    } else {
      localStorage.setItem(namedPokemon, JSON.stringify(listLocal));
      setPopUp(!popUp);
      navigate('/');
    }
  };

  const closeHandler = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const inputNameHandler = (e) => {
    setNamedPokemon(e.target.value);
  };

  useEffect(() => {
    getDetailAbility();

  }, []);

  return (
    <div className={styledetail}>
      <div className='lg:w-full lg:h-full lg:max-w-[1024px] w-[400px] md:w-[760px] content-center m-auto justify-center flex'>
        {popUp && <div className="popUp z-10 absolute flex w-[1024px] h-[768px] bg-slate-600/80 content-center justify-center">
          <form className='flex flex-col justify-center content-center'>
            <p className='text-white font-medium text-3xl text-center'>Woahhhh !!!</p>
            <p className='text-white font-medium text-3xl mb-4'> You catch {capitalizeName(pokemonName)}</p>
            <p className='text-white font-medium text-xl'>Give name to your pokemon...</p>
            <input required="required" onChange={inputNameHandler} id='yourPokemonName' className='h-10 text-center' type="text" />
            <button onClick={saveHandler} className='px-4 py-4 text-white bg-cyan-500 font-semibold text-2xl mt-4'>Save</button>
          </form>
        </div>}

        {failedPopUp && <div className="popUp z-10 absolute flex w-[1024px] h-[768px] bg-slate-600/80 content-center justify-center">
          <form className='flex flex-col justify-center content-center'>
            <p className='text-white font-medium text-3xl text-center'>Sorry Try Again !</p>
            <button onClick={closeHandler} className='px-4 py-4 text-white bg-cyan-500 font-semibold text-2xl mt-4'>Close</button>
          </form>
        </div>}


        <div className="wrapper h-full flex flex-col">
          <Header />
          <div className="title lg:mt-10 flex justify-center lg:justify-between mb-10 content-center">
            <div className="name">
              <p className='p-[2px] text-center  text-white font-medium text-sm rounded-md bg-red-300'>#{detailPokemonById.id}</p>
              <p className='text-2xl text-slate-700 mt-2 font-semibold'>{capitalizeName(pokemonName)}</p>
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
                <p className='text-slate-600 font-medium'>{capitalizeName(pokemonType)}"</p>

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