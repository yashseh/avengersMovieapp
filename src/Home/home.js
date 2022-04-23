import React, { useEffect } from 'react'
import MovieListing from '../components/MovieListing/MovieListing'
import {useDispatch} from 'react-redux';
import { fetchAsyncMovies } from '../features/movies/movieslice';
function Home() {
  const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(fetchAsyncMovies())
 },[dispatch])


  return (
    <div>
      <div className='banner-img'>
        <MovieListing/>
      </div>
    </div>
  )
}

export default Home