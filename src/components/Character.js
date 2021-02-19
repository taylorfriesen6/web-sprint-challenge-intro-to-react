// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    background-color: white;
    padding: 1em;
    margin: 1em;
    width: 20em;
    border-radius: 1em;
`;

const Character = ({character}) => {
    return (
        <StyledCharacter>
            {character.name}
        </StyledCharacter>);
}

export default Character;