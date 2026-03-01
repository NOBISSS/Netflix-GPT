import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute px-4 pt-[12%] text-white bg-gradient-to-t from-black w-full h-screen overflow-x-hidden'>
      <h1 className='text-6xl font-bold text-white px-12 py-5'>{title}</h1>
      <p className='text-white px-12 w-1/3 font-medium'>{overview}</p>
      <div className='py-4 flex items-center'>
        <button className='bg-white text-black font-medium py-3 px-10 rounded-sm mx-12 rounded-2xl transition duration-75 hover:bg-opacity-50 '>🎥 Play</button>
        <button className='bg-gray-700/50 text-white py-3 px-10 rounded-2xl bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle