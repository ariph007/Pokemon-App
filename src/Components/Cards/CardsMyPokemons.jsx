import React from 'react';
import { Link } from 'react-router-dom';

const CardsMyPokemons = ({ customName, name, image, type, id }) => {
    const capitalizeName = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const releaseHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem(customName);
        window.location.reload();
    };

    const styleType = `flex w-[150px] h-[300px] overflow-hidden container shadow-md p-5 box-content rounded-md ${type}`;
    return (
        <Link to={`/my-pokemon`}>
            <div className={styleType}>
                <div className="wrapper content-start">
                    <span className='flex justify-between mb-6'>
                        {/* <p className='text-sm text-slate-600 font-semibold'>#{id}</p> */}
                        <p className='text-slate-700 font-medium text-lg'>{capitalizeName(name)}</p>
                    </span>
                    <img src={image} alt={name} className="border-2 bg-gradient-to-b from-slate-500/40 border-none rounded-full" />
                    <p className='flex justify-center mt-5 text-slate-800 font-medium text-2xl'>{capitalizeName(customName)}</p>
                    <div className="buttonContainer flex justify-center mt-2">
                        <button onClick={releaseHandler} className='text-white font-2xl font-medium px-2 rounded-md py-1 bg-red-600'>Release</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardsMyPokemons