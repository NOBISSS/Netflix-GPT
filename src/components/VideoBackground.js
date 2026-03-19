import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);

    return (
        <div className='absolute top-0 left-0 w-screen h-screen overflow-hidden -z-10'>
            <iframe
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full pointer-events-none'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&disablekb=1&modestbranding=1&showinfo=0&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    )
}

export default VideoBackground