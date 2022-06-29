import React, { useEffect } from 'react'

const Cards = ({id, name,image, type}) => { 
    function capitalizeName(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className='w-[150px] h-[300px] container shadow-md p-5 box-content rounded-md'>
            <div className="wrapper">
                <span className='flex justify-between mb-6'>    
                <p className='text-sm text-slate-600'>#{id}</p>
                <p className='text-base text-slate-700'>{capitalizeName(name)}</p>
                </span>
                <img src={image} alt={name} className="border-2 bg-gradient-to-b from-slate-500/40 border-none rounded-full"/>
                <p className='flex justify-center mt-10'>{capitalizeName(type)}</p>
            </div>
        </div>
    )
}

export default Cards