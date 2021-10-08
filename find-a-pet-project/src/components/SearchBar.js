function SearchBar({setSearch}){

    function handleSubmit(e){
        e.preventDefault();
        setSearch(e.target.querySelector('input').value)
    }

return(
    <>
    <form onSubmit={handleSubmit} className="pet-search">
    <input type="text"  placeholder="Search By Name" />
    <button type="submit">Search</button>
    </form>
    </>
)
}

export default SearchBar;