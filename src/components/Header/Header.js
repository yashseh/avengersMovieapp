import React from 'react'
import {Link} from 'react-router-dom';
import USER_IMAGE from '../../assets/images/user.png';
import './Header.scss';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieslice';
import { useState } from 'react';
function Header() {
  const [search,setSearch] = useState('');
  const movies = useSelector(getAllMovies())
  return (
   <div className='header'>
    <Link to="/">
      <div className='logo'>Movie App</div>
    </Link>
    <div className='search'>
      <input className='searchBox' type="search" placeholder='search for movies or Tv shows'/>
    </div>
    <div className='user-image'>
      <img src={USER_IMAGE} alt="user" />
    </div>
   </div>
  )
}

export default Header