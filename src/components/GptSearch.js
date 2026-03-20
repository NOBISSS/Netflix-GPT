import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img src={BG_URL}
          alt='Netflix BG'
          className='h-screen w-screen object-cover'
          />
      </div>
      <div className='pt-[25%] md:p-0'>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch