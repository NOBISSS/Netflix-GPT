import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const trailerVideo=useSelector((store)=>store.movies.trailerVideo);
    
    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);

        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");

        const trailer = filterData.length === 0 ? json.results[0] : filterData[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        !trailerVideo && getMovieVideo();
    }, [])
}

export default useMovieTrailer;