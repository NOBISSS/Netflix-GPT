import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import { useDispatch, useSelector } from 'react-redux'
import GptSearch from './GptSearch'

const Browse = () => {
  const dispatch=useDispatch();
  const showGptState=useSelector((state)=>state.gpt.showGptState);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className='w-full h-full'>
      <Header />
      { showGptState ? <GptSearch/> : <>
      <MainContainer />
      <SecondaryContainer/>
      </>
}
      {
        /*
          MainContainer
            - VideoBackgorund
            - VideoTitle
          SecondaryContainer
            -MovieList * n
              - cards * n
        */
      }
    </div>
  )
}

export default Browse