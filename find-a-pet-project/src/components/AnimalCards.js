import { Link } from 'react-router-dom';
import styled from 'styled-components';

function AnimalCards({animal}){

    return(
        <CardWrapper>
        <img src={animal.image} style={{width: "200px"}}/>
        <h3>{animal.name}</h3>
        <p>{animal.bio}</p>
        <Link>Details</Link>
        </CardWrapper>
    )
}

export default AnimalCards;

const CardWrapper = styled.div `
margin: 10px;
width: 200px;
padding: 25px;
background: #92a6a6;
box-shadow: 0 0 10px rgba(0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.12);
flex-direction: row;
`