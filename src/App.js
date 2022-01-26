import React from 'react';
import { action,originals, horror } from './urls';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import './App.css';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=70b0f6dd60e7d6eba7f271024d0eb5c5
// 70b0f6dd60e7d6eba7f271024d0eb5c5