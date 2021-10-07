import styled from "styled-components";

function PetDetail({animal}){
    
    return(
        <DetailWrapper>
        <img src={animal.image} style={{width: "500px"}}/>
        <h1>Name: {animal.name}</h1>
        <h3>Breed: {animal.breed}</h3>
        <p>Bio: {animal.bio}</p>
        <p>City: {animal.location}</p>
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