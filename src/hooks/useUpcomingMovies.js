import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { MoviesEndPoints } from "../utils/apis";

const {UPCOMING_MOVIES}=MoviesEndPoints

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies=useSelector((store)=>store.movies.upcomingMovies);

    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;