import styled from 'styled-components'

function PetForm(){

    // add submit feature that adds form to form array in database
    
return(
<FormWrapper>
    <strong>Name:</strong>
    <input type="text" placeholder="name"/>
    <strong>Address:</strong>
    <input type="text" placeholder="address"/>
    <strong>Phone:</strong>
    <input type="text" placeholder="xxx-xxx-xxxx"/>
</FormWrapper>
)
}

export default PetForm;

const FormWrapper = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
margin-left:25em;
margin-right:35em;
margin-top: 2em;
`