// Write your Character component here
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    background-color: white;
    padding: 1em;
    margin: 1em;
    width: 20em;
    border-radius: 1em;
    opacity: 80%;
`;

const Character = ({character}) => {
    const [homePlanet, setHomePlanet] = useState('');
    useEffect(() => {
        //console.log(character.homeworld);
        axios.get(character.homeworld)
            .then(res => setHomePlanet(res.data.name))
            .catch(err => setHomePlanet('unknown planet'));
    }, [character])

    return (
        <StyledCharacter>
            <h2>{character.name}</h2>
            <p>eye color: {character.eye_color}</p>
            <p>hair color: {character.hair_color}</p>
            <p>home planet: {homePlanet}</p>
        </StyledCharacter>);
}

export default Character;