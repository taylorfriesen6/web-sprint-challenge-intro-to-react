import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // const tempCharacters = [];
    // for (let i = 1; i <= 10; i++) {
    //   axios.get(`https://swapi.dev/api/people/${i}`)
    //   .then(res => {
    //     setCharacters(characters.concat([res.data]));
    //   })
    //   .catch(err => console.log(err));
    // }
    // TODO: sort characters!

    axios.get(`https://swapi.dev/api/people`)
      .then(res => setCharacters(res.data.results || res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(characters);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <p>{characters.length}</p>
      {characters.map(character => <Character character={character}/>)}
    </div>
  );
}

export default App;
