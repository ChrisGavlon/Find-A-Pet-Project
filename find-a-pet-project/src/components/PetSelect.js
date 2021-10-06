import { Link } from 'react-router-dom'
import styled from 'styled-components';
function PetSelect(){
    
    return(
        <>
        <NavContainer>
        <Link to="/animals/dogs">Dogs</Link>
        <Link to="/animals/cats">Cats</Link>
        </NavContainer>
        </>
    )
}

export default PetSelect;

const NavContainer = styled.div `
background: red;
padding: 0.5em 2em;
margin: 2em;
justify-content: center;
& a{
    color: white;
    text-decoration: none;
    display: inline;
    margin: 2em;
}
`