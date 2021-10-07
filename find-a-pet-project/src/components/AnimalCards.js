import { Link } from 'react-router-dom';
import styled from 'styled-components';

function AnimalCards({animal, setSelectedPet}){
    
    return(
        <CardWrapper>
        <img src={animal.image} style={{width: "200px"}}/>
        <h3>{animal.name}</h3>
        <p>{animal.bio}</p>
        <Link onClick={() => setSelectedPet(animal)} to={`/petdetail/${animal.id}`}>Details</Link>
        </CardWrapper>
    )
}

export default AnimalCards;

const CardWrapper = styled.div `
margin: 10px;
width: 200px;
padding: 25px;
background: #cbcdd4;
box-shadow: 0 0 10px rgba(0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.12);
flex-direction: row;
`