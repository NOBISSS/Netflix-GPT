import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { MoviesEndPoints } from "../utils/apis";

const {POPULAR_MOVIES}=MoviesEndPoints

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies=useSelector((store)=>store.movies.popularMovies);
    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
       !popularMovies && getPopularMovies();
    }, [])
}

export default usePopularMovies;