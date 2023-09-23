import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies &&
    (<div className=' bg-black '>
      <div className='pt-6 md:pt-0 md:-mt-52 relative z-10 px-0 md:px-2'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.TrendingMovies}/>
      <MovieList title={"Popular"} movies={movies.PopularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>)
  )
}

export default SecondaryContainer