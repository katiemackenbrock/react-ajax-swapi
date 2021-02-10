import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import StarshipPage from './StarshipPage';
import ShipList from './ShipList';

function App() {
  const [starship, setStarship] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData)
        setStarship(Object.values(jsonData.results))
      })
  }, [])


  console.log(starship)

  

  return (
    <div className="App-container">
      <h1>STAR WARS SHIPSSSSS</h1>
      <BrowserRouter>
          <Route exact path='/' render={() => <ShipList starship={starship} />} />
          <Route path='/starship' render={({ location }) =>
            <StarshipPage location={location} />
          } />
      </BrowserRouter>

    </div>
  );
}

export default App;
