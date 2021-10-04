import './App.css';
import PetDetail from "./PetDetail"
import PetContainer from './PetContainer';
import Header from './Header';
import AdoptionForm from './AdoptionForm';

function App() {
  return (
    <div className="App">
      <PetDetail></PetDetail>
      <PetContainer></PetContainer>
      <Header></Header>
      <AdoptionForm></AdoptionForm>
    </div>
  );
}

export default App;
