import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const trailerVideo=useSelector((store)=>store.movies.trailerVideo);
    
    const getMovieVideo = async () => {
        try{
        const data = await fetch(`/api/trailer?movieId=${movieId}`);

        const json = await data.json();
        console.log("TRAILER API RESPONSE:",json);
        const filterData = json.results.filter((video) => video.type === "Trailer");

        const trailer = filterData.length === 0 ? json.results[0] : filterData[0];

        dispatch(addTrailerVideo(trailer));
        }catch(error){
            console.error("Trailer Fetch Failed:",error)
        }
    };

    useEffect(() => {
        !trailerVideo && getMovieVideo();
    }, [movieId])
}

export default useMovieTrailer;