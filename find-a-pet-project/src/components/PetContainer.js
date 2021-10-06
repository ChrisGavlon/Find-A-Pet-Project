import AnimalCards from './AnimalCards'
import CategoryFilter from './CategoryFilter'
import SearchBar from './SearchBar'
import PetSelect from './PetSelect'
// import { useState } from 'react'
import { Route, Switch, Link} from 'react-router-dom'

function PetContainer({dogList, catList}){


    return(
        <>
        <PetSelect /> 
        {dogList.map(animal => <Route path="/animals/dogs"><AnimalCards animal={animal} /></Route>)}
        {catList.map(animal => <Route path="/animals/cats"><AnimalCards animal={animal} /></Route>)}
        </>
    )
}

export default PetContainer;