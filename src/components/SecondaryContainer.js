import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    <div className='w-full max-h-fullscreen px-2 text-white px-4 z-20 md:p-4 bg-black md:pl-12'>
      <div className='-mt-42 relative z-20 '>
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