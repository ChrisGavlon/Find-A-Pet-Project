import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import { useLocation } from 'react-router-dom';

function PetNav({setSearch, setCatBreed, setDogBreed, setCity}){

    const location = useLocation().pathname;

    return(
        <>
        <div className="pet-nav">
        <CategoryFilter setCatBreed={setCatBreed} setDogBreed={setDogBreed} setCity={setCity} />
        {location === '/animals/cats' || location === '/animals/dogs' ?
        <SearchBar setSearch={setSearch}/>
        : null }
        <Link to="/animals/dogs">Dogs</Link>
        <Link to="/animals/cats">Cats</Link>
        </div>
        </>
    )
}

export default PetNav;
