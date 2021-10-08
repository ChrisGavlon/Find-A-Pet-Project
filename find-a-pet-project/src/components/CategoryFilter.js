import { useLocation } from 'react-router-dom' 

function CategoryFilter({setCatBreed, setDogBreed, setCity}){

    const location = useLocation().pathname;
    
    return(
        <>
        {location === '/animals/dogs' ?
        <select name="dog-breed-filter" onChange={(e) => setDogBreed(e.target.value)}>
            <option value="All">Dog Breed</option>
            <option value="Maltese">Maltese</option>
            <option value="Yorkie">Yorkie</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Shih Tzu">Shih Tzu</option>
        </select>
        : null}
        
        {location === '/animals/cats' ?
        <select name="cat-breed-filter" onChange={(e) => setCatBreed(e.target.value)}>
            <option value="All">Cat Breed</option>
            <option value="American Short-Hair">American-Shorthair</option>
            <option value="Toyger">Toyger</option>
            <option value="Maine Coon">Maine Coon</option>
        </select>
        : null}
        {location === '/animals/cats' || location ==='/animals/dogs' ?
        <select name="city-filter" onChange={(e) => setCity(e.target.value)}>
            <option value="All">City</option>
            <option value="Houston">Houston</option>
            <option value="Austin">Austin</option>
            <option value="New York City">New York City</option>
            <option value="Seattle">Seattle</option>
            <option value="Cincinnati">Cincinnati</option>
            <option value="Tulsa">Tulsa</option>
        </select>
        : null}
        </>
    )
}

export default CategoryFilter;