import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import ShimmerMovieList from '../utils/ShimmerMovieList'

const SecondaryContainer = () => {
  const { loading } = useSelector((store) => store.gpt);
  const movies = useSelector((store) => store.movies)
  console.log(movies);
  return (
    <div className='w-full max-h-fullscreen px-2 text-white px-4 z-20 md:p-4 bg-black md:pl-12'>
      <div className='-mt-42 relative z-20 '>
        {loading ? (
          <>
            <ShimmerMovieList />
            <ShimmerMovieList />
            <ShimmerMovieList />
            <ShimmerMovieList />
          </>
        ) : (
          <>
            <MovieList
              title="Now Playing"
              movies={movies.nowPlayingMovies}
            />
            {!movies.nowPlayingMovies && <ShimmerMovieList />}

            <MovieList
             title={"Top Rated"}
             movies={movies.topRatedMovies} 
            />
            {!movies.topRatedMovies && <ShimmerMovieList />}

            <MovieList
             title={"Popular"}
             movies={movies.popularMovies} 
            />

            {!movies.popularMovies && <ShimmerMovieList />}

            <MovieList
             title={"Upcoming"}
             movies={movies.upcomingMovies} 
             />
             {!movies.upcomingMovies && <ShimmerMovieList />}
          </>
        )
        }
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