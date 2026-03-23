import React, { useState } from "react";
import MovieCard from "./MovieCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`
    );
    const json = await data.json();
    setResults(json.results);
  };

  return (
    <div className="bg-black text-white px-4 md:px-12">
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="p-2 w-full bg-gray-800 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={searchMovies}
          className="bg-red-600 px-4 rounded"
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;