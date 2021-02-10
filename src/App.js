import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import StarshipPage from './StarshipPage';


function App() {
  const [starship, setStarship] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
    .then(response => response.json())
    .then(jsonData  => {
      setStarship(jsonData.results)
      // console.log(jsonData.results)
    })
  })

  return (
  <div className="App-container">
    {starship.map(starship =>
      <Link
        to={{
          pathname: '/starship',
          state: starship
        }}
        key={starship.name}
        >
        {starship.name}
      </Link>
    )}

    <div className="App">
      <Switch>
      <Route path='/starship' render={({location}) => 
        <StarshipPage starship={starship}/>
      }/>
      </Switch>
    </div>
  </div>
  );
}

export default App;
