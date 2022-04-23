import React from 'react'
import {useSelector} from 'react-redux';
import { getAllMovies } from '../../features/movies/movieslice';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MovieListing.scss';
function MovieListing() {
  const movies  = useSelector(getAllMovies);

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2 className="movies-heading">Movies</h2>
        <div className='movie-container'>
         { movies.Response === "True" ? 
  ( 
   movies.Search.map((movie,index)=>{
     return(
     <MoviesCard data={movie} key={index}/>
     )
   }) 
  ) 
  : 
  (
    <div>
      <h3>{movies.Error}</h3>
    </div>
  )}
        </div>
      </div>
    </div>
  )
}

export default MovieListing