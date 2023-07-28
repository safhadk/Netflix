import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action,originals } from './urls';

function App() {
  return (
    <div className="App">
      <h1>
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix originals'/>
        <RowPost url={action}    title='Action' isSmall/>
      </h1>
    </div>
  );
}

export default App;
