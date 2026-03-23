import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null)

  const isDown = useRef(false)
const startX = useRef(0)
const scrollLeft = useRef(0)

  const handleMouseDown = (e) => {
  isDown.current = true
  startX.current = e.pageX - scrollRef.current.offsetLeft
  scrollLeft.current = scrollRef.current.scrollLeft
}

const handleMouseLeave = () => {
  isDown.current = false
}

const handleMouseUp = () => {
  isDown.current = false
}

const handleMouseMove = (e) => {
  if (!isDown.current) return
  e.preventDefault()

  const x = e.pageX - scrollRef.current.offsetLeft
  const walk = (x - startX.current) * 1.5

  scrollRef.current.scrollLeft = scrollLeft.current - walk
}

  return (
    <div className="mb-6">
      <h1 className="text-lg md:text-2xl py-4 px-4">{title}</h1>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth px-4 space-x-4 cursor-grab active:cursor-grabbing select-none"
         onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
         onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  )
}

export default MovieList