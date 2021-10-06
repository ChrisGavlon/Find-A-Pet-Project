import styled from "styled-components";
import { Link } from 'react-router-dom'
function Header(){
    return(
        <>
        <H1Container>     
        <Link to="/"><h1>Find A Pet</h1></Link>
        <Link to="/form"><strong>Fill Out Form</strong></Link>
        </H1Container>
        
        </>
    )
}

export default Header;

const H1Container = styled.div `
background: #00abba;
display: flex;
justify-content: center;
color: #c3c7c7;
font-family: 'Roboto', sans-serif;
& strong{
    color: red;
    margin: 21.44px;
    text-decoration: none;
}
`
