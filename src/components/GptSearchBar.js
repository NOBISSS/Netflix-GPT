import React from 'react'

const GptSearchBar = () => {
    return (

        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12 p-2'>
                <input type="text" placeholder='Search for movies, TV shows, genres and more...' className='col-span-9 rounded-md p-3 m-1 text-black text-lg' />
                <button className='col-span-3 bg-red-600 text-white px-4 py-2 rounded-md'>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar