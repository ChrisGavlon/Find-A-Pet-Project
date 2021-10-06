// import './App.css';
import PetDetail from "./PetDetail"
import PetContainer from './PetContainer';
import Header from './Header';
import PetForm from './PetForm';
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'


function App() {
  const [catList, setCatList] = useState([])
  const [dogList, setDogList] = useState([])

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
      <Switch>
        <Route path="/petdetail">
          <PetDetail></PetDetail>
        </Route>
        <Route path="/form">
          <PetForm></PetForm>
        </Route>
        <Route path="/">
          <PetContainer dogList={dogList} catList={catList}></PetContainer>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
