import AnimalCards from './AnimalCards'
// import CategoryFilter from './CategoryFilter'
import PetNav from './PetNav'
import { useState } from 'react'
import { Route } from 'react-router-dom'

function PetContainer({dogList, catList, setSelectedPet}){
    // This will be passed down to PetNav then to SearchBar for retrieving a value
    const [search, setSearch] = useState("")

    // When search has been updated the filtered Dogs or Cats will be rendered
    const filteredDogs = dogList.filter(dog => dog.name.toLowerCase().includes(search.toLowerCase())) 
    const filteredCats = catList.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase())) 
    return(
        <>
        <PetNav setSearch={setSearch}/>
        {filteredDogs.map(animal => <Route path="/animals/dogs"><AnimalCards animal={animal} setSelectedPet={setSelectedPet} key={animal.name}/></Route>)}
        {filteredCats.map(animal => <Route path="/animals/cats"><AnimalCards animal={animal} setSelectedPet={setSelectedPet} key={animal.name}/></Route>)}
        </>
    )
}

export default PetContainer;