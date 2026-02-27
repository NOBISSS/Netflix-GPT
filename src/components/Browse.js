import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

  return (
    <div className='w-full h-full'>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
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