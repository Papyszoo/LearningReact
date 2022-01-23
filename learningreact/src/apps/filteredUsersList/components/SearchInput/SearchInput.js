import React from 'react';
import './SearchInput.css'

export default function SearchInput(props) {
    return(
        <div className="items-stretch flex w-full">
            <i className='bg-stone-800 bx bx-search-alt-2 p-2 text-white border border-stone-600 rounded-l-md border-r-0'></i>
            <input 
                className="bg-stone-800 text-neutral-200 py-1 px-2 border border-stone-600 rounded-r-md outline-none
                focus-visible:border-stone-400 focus-visible:bg-stone-700
                hover:border-stone-400" 
                onChange={props.onChange}/>
        </div>
    )
}