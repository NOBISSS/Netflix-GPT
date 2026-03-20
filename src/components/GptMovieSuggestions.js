import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {movieResults,movieNames}=useSelector((store)=>store.gpt);
  if(!movieNames) return <h1 className='text-white font-semibold'>No Movies Found Currently</h1>;
  return (
    <div className='overflow-hidden p-4 bg-black bg-opacity-60 text-white'>
      {
        movieResults.length > 0 && movieNames.map((title,index)=> <MovieList title={title} key={index} movies={movieResults[index]}/>)
      }
    </div>
  )
}

export default GptMovieSuggestions