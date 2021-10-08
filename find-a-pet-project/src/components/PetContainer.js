import AnimalCards from './AnimalCards'
// import CategoryFilter from './CategoryFilter'
import PetNav from './PetNav'
import { useState } from 'react'
import { Route } from 'react-router-dom'

function PetContainer({dogList, catList, setSelectedPet}){
// These useState's wil be passed down into PetNav for retrieving a value
    const [search, setSearch] = useState("") // to retrieve search value
    const [catBreed, setCatBreed] = useState("All") // to retrieve breed category value
    const [dogBreed, setDogBreed] = useState("All")
    const [city, setCity] = useState("All") // to retrieve city category value
    const [filteredDogs, setFilteredDogs] = useState(dogList)
    const [filteredCats, setFilteredCats] = useState(catList)

// When search has been updated the filtered Dogs or Cats will be rendered
     
    function onCityChange(val){
        overallFilter(catBreed, val, search);
        overallDogFilter(dogBreed, val, search)
        setCity(val)
    }
    function searchFilter(val){
        overallFilter(catBreed, city, val)
        overallDogFilter(dogBreed, city, val)
        setSearch(val)
    }
//--------------------------------------------------

    function onDogBreedChange(val){
        overallDogFilter(val, city, search)
        setDogBreed(val)
    }

//--------------------------------------------------
    function overallDogFilter(breed, city, search){
    
    let filteredDogsTemp = dogList.filter((dog) => {
        if(breed === "All"){
            return true;
        }else{
            return dog.breed === breed;
        }
    })

    filteredDogsTemp = filteredDogsTemp.filter((dog) => {
        if(city === "All"){
            return true;
        }else{
            return dog.city === city;
        }
    })

    filteredDogsTemp = filteredDogsTemp.filter(dog => dog.name.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredDogsTemp)
    setFilteredDogs(filteredDogsTemp);
}

//-----------------------------------------------------
   function onCatBreedChange(val){
    
        overallFilter(val, city, search);
        setCatBreed(val);
    }

    function overallFilter(breed, city, search){
    
    let filteredCatsTemp = catList.filter((cat) => {
        if(breed === "All"){
            return true;
        }else{
            return cat.breed === breed;
        }
    })

//--------------------------------------------------------

    filteredCatsTemp = filteredCatsTemp.filter((cat) => {
        if(city === "All"){
            return true;
        }else{
            return cat.city === city;
        }
    })

    filteredCatsTemp = filteredCatsTemp.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredCatsTemp)
    setFilteredCats(filteredCatsTemp)
}


    

    return(
        <>
        <PetNav setSearch={searchFilter} setCatBreed={onCatBreedChange} setDogBreed={onDogBreedChange} setCity={onCityChange} />
        {filteredDogs.map(animal => <Route path="/animals/dogs"><AnimalCards animal={animal} setSelectedPet={setSelectedPet} key={animal.name}/></Route>)}
        {filteredCats.map(animal => <Route path="/animals/cats"><AnimalCards animal={animal} setSelectedPet={setSelectedPet} key={animal.name}/></Route>)}
        </>
    )
}

export default PetContainer;