import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    <div className='w-full h-screen px-2 text-white z-20 p-4 bg-black pl-12'>
      <div className='-mt-56 relative z-20 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
      </div>
      {/***Planning**
        MovieList - Popular
          MovieCards * n
        MovieList - NowPlaying
        MovieList - Trending
        MovieList - Horror* */}

    </div>
  )
}

export default SecondaryContainer