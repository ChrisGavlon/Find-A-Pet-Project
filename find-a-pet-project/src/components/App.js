// import './App.css';
import PetDetail from "./PetDetail";
import PetContainer from './PetContainer';
import Header from './Header';
import PetForm from './PetForm';
import PetSelect from "./PetSelect";
import Home from "./Home";
import NavBar from './NavBar'
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [catList, setCatList] = useState([]);
  const [dogList, setDogList] = useState([]);
  const [selectedPet, setSelectedPet] = useState();

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
        <Route path="/form">
          <PetForm></PetForm>
        </Route>
        <Route path="/animals">
          <PetContainer dogList={dogList} catList={catList} setSelectedPet={setSelectedPet}></PetContainer>
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
