import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div>
        <h1 className="text-lg mx-auto md:text-2xl py-4">{title}</h1>
        <div className='flex overflow-x-scroll w-full'>
        <div className="flex w-50 h-50">
          {movies && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        </div>
    </div>
  )
}

export default MovieList