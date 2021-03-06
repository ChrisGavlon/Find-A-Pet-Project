// import './App.css';
import PetDetail from "./PetDetail";
import PetContainer from './PetContainer';
import Header from './Header';
import PetForm from './PetForm';
import Home from "./Home";
import NavBar from './NavBar';
import MyForms from './MyForms';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [catList, setCatList] = useState([]);
  const [dogList, setDogList] = useState([]);
  const [formList, setFormList] = useState([]);
  const [selectedPet, setSelectedPet] = useState();
  const history = useHistory();

  // Fetching the cat data & setting it to catList
useEffect(()=> {
  fetch('http://localhost:4000/cats')
  .then(res => res.json())
  .then(data => {
    setCatList(data)
  })
},[])

// Fetching the dog data & setting it to dogList
useEffect(()=> {
  fetch('http://localhost:4000/dogs')
  .then(res => res.json())
  .then(data => {
    setDogList(data)
  })
},[])

useEffect(()=> {
  fetch('http://localhost:4000/forms')
  .then(res => res.json())
  .then(data => {
      setFormList(data)
  })
}, [])

function addNewForm(form){

  fetch('http://localhost:4000/forms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form)
  })
  .then(res => res.json())
  .then(newForm =>{
    setFormList([
      ...formList, newForm
    ])
    history.push('/myforms')
  })
}

// Create Route to new compononent named: My Forms

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        {
        selectedPet && ( 
        <Route path={`/petdetail/${selectedPet.id}`}>
        <PetDetail animal={selectedPet}></PetDetail>
        </Route>
        )
        }
        <Route path={'/myforms'}>
          <MyForms formList={formList}/>
        </Route>
        <Route path="/form">
          <PetForm addNewForm={addNewForm}/>
        </Route>
        <Route path="/animals">
          { (dogList.length > 0 || catList.length > 0) && 
          <PetContainer dogList={dogList} catList={catList} setSelectedPet={setSelectedPet}></PetContainer>
          }
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 PAGE NOT FOUND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
