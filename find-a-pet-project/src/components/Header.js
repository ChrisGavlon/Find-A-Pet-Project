import styled from "styled-components";
import { Link } from 'react-router-dom'
function Header(){
    return(
        <>
        <H1Container>     
        <Link to="/"><h1>FIND A PET</h1></Link>
        </H1Container>
        
        </>
    )
}

export default Header;

const H1Container = styled.div `
background: #00abba;
display: flex;
justify-content: center;
font-family: 'Roboto', sans-serif;
& a{
    text-decoration: none;
}
& h1{
    font-family: Cursive;
    color: white;
    margin: 21.44px;
}
& h1:hover{
    color: #c8d48e;
}

& h1:active{
    color: #f1ffad;
}
`
