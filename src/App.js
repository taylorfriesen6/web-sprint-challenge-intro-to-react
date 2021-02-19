import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';

const StyledCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledCharacters>
        {characters.map(character => <Character character={character}/>)}
      </StyledCharacters>
    </div>
  );
}

export default App;
