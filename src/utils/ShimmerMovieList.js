import React from "react";

const ShimmerMovieList = ({ title }) => {
  return (
    <div className="mb-6">
      {/* Title shimmer */}
      <div className="h-6 w-40 bg-gray-700 rounded-md mb-4 ml-4 animate-pulse"></div>

      {/* Movie cards shimmer */}
      <div className="flex overflow-x-auto no-scrollbar px-4 space-x-4">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-36 md:w-48 h-52 md:h-72 flex-shrink-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerMovieList;