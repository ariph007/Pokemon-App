import React from 'react';
import { Link } from 'react-router-dom';
import {capitalizeName} from '../../utils/index.js'

const Cards = ({ id, name, image, type }) => {

    const styleType = `flex w-[150px] h-[300px] cursor-pointer hover:scale-110 overflow-hidden container shadow-md p-5 box-content rounded-md ${type}`;
    return (
        <Link to={`/pokemon-detail/${id}`}>
            <div className={styleType}>
                <div className="wrapper content-start">
                    <span className='flex justify-between mb-6'>
                        <p className='text-sm text-slate-600 font-semibold'>#{id}</p>
                        <p className='text-slate-700 font-medium text-lg'>{capitalizeName(name)}</p>
                    </span>
                    <img src={image} alt={name} className="border-2 bg-gradient-to-b from-slate-500/40 border-none rounded-full" />
                    <p className='flex justify-center mt-10 text-slate-800 font-medium text-2xl'>{capitalizeName(type)}</p>
                </div>
            </div>
        </Link>
    )
}

export default Cards