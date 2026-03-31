import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        try{
        const data = await fetch("/api/nowPlaying");
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
        }catch(error){
            console.error("Failed to Fetch Now Playing Movies",error);
        }
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [nowPlayingMovies])
}

export default useNowPlayingMovies;