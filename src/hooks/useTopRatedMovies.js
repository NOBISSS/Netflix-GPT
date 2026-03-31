import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies);

    const getTopRatedMovies = async () => {
        const data = await fetch("/api/topRated");
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, [topRatedMovies])
}

export default useTopRatedMovies;