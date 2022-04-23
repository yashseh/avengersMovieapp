import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Home/home';
import "./App.scss";
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {    
  return (
    <div className="App">
    <Router>
     <Header/>
     <div className='container'>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/movie/:imbdID" element={<MovieDetails/>} />
     <Route path="*" element={<PageNotFound/>} />
     </Routes>
     </div>
     <Footer/>
    </Router>
    </div>
  );
}

export default App;
