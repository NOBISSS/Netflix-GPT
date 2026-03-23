import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ title, movies }) => {
  return (
    <div className="mb-10">
      <h1 className="text-lg md:text-2xl py-4">{title}</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieGrid;