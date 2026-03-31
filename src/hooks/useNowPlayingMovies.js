import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { MoviesEndPoints } from "../utils/apis";

const {NOW_PLAYING_MOVIES}=MoviesEndPoints

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;