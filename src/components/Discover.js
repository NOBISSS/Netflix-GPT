import React from "react";
import MovieGrid from "./MovieGrid";
import { useSelector } from "react-redux";
import { NetflixLogo } from "./Header";
import Search from "./Search";
import {  useNavigate } from "react-router-dom";

const Discover = () => {
    const navigate=useNavigate();
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-12 pt-1">
    <div className="m-4 pb-15 flex">
        <div className="w-1/2 flex justify-between">
        <NetflixLogo/>
        <Search/>
        </div>
        <div className="w-1/2 flex justify-end">
        <button onClick={()=>navigate('/browse')}>Back To Browse</button>
        </div>
    </div>
    <div>
      <MovieGrid title="Trending Now" movies={movies.popularMovies} />
      <MovieGrid title="Top Rated" movies={movies.topRatedMovies} />
      <MovieGrid title="Popular Movies" movies={movies.popularMovies} />
      <MovieGrid title="Upcoming" movies={movies.upcomingMovies} />

      {/* Genre based */}
      <MovieGrid title="Action Movies" movies={movies.actionMovies} />
      <MovieGrid title="Comedy Movies" movies={movies.comedyMovies} />
      <MovieGrid title="Horror Movies" movies={movies.horrorMovies} />

      {/* TV */}
      <MovieGrid title="Trending TV Shows" movies={movies.trendingTV} />
      </div>
    </div>
  );
};

export default Discover;