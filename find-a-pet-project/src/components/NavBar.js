import { Link } from 'react-router-dom'
import styled from 'styled-components';

function NavBar(){
    return(
        <NavContainer>
        <Link to="/animals">Animals</Link>
        <Link to="/">Home</Link>
        <Link to="/myforms">My Forms</Link>
        </NavContainer>
    )
}

export default NavBar;

const NavContainer = styled.div `
background: #4d91bf;
padding: 0.5em 2em;
margin: 2em;
text-align: center;
& a{
    font-family: Cursive;
    color: white;
    text-decoration: none;
    display: inline;
    margin: 2em;
}
& a:hover{
    color: #c8d48e;
}
& a:active{
    color: #f1ffad;
}
`