import styled from "styled-components";
import { Link } from 'react-router-dom';

function PetDetail({animal}){
    
    return(
        <DetailWrapper>
        <img src={animal.image} style={{width: "500px"}} alt={animal.name}/>
        <h1>Name: {animal.name}</h1>
        <h3>Breed: {animal.breed}</h3>
        <p>Bio: {animal.bio}</p>
        <p>City: {animal.city}</p>
        <Link to="/form">Fill Out Form</Link>
        </DetailWrapper>
    )
}

export default PetDetail;

const DetailWrapper = styled.div `
margin: auto;
width: 600px;
padding: 25px;
background: #cbcdd4;
box-shadow: 0 0 10px rgba(0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.12);
text-align: center;
`