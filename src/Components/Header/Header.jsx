import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="headerContainer mb-10 flex flex-col md:flex-row justify-between content-center mt-4 ">
            <div className="logo mb-4 md:mb-0 justify-center content-center flex">
                <Link to={'/'}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokedex" className='w-40' />
                </Link>
            </div>
            <div className="menu justify-center content-center flex">
                <Link to={'/'}>
                    <button className='px-4 rounded-sm py-1 text-white bg-sky-500 mr-4 font-medium text-base'>Home</button>
                </Link>
                <Link to={'/my-pokemon'}>
                <button className='px-3 rounded-sm py-1 text-white bg-sky-500 font-medium text-base'>My Pokemon</button>
                </Link>
            </div>
        </div>
    )
}

export default Header