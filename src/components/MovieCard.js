import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className="w-36 mx-2 md:w-48 flex-shrink-0 transform hover:scale-110 transition duration-300">
      <img src={IMG_CDN_URL+movie.poster_path} alt={movie.title} 
      draggable="false"
      className="rounded-md hover:scale-105 transition duration-300 w-full"
      />
    </div>
  )
}

export default MovieCard