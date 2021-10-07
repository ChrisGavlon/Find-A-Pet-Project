import AnimalCards from './AnimalCards'
import CategoryFilter from './CategoryFilter'
import SearchBar from './SearchBar'
import PetSelect from './PetSelect'
// import { useState } from 'react'
import { Route } from 'react-router-dom'

function PetContainer({dogList, catList, setSelectedPet}){

    console.log(Route)
    return(
        <>
        <PetSelect />
        {dogList.map(animal => <Route path="/animals/dogs"><AnimalCards animal={animal} setSelectedPet={setSelectedPet} key={animal.name}/></Route>)}
        {catList.map(animal => <Route path="/animals/cats"><AnimalCards animal={animal} setSelectedPet={setSelectedPet} key={animal.name}/></Route>)}
        </>
    )
}

export default PetContainer;