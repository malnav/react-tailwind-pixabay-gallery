const ImageSearch = ({searchText}) => {

    const searchImages = (event) => {
        event.preventDefault()
        searchText(event.target.search.value)
    }

    const handleSearchText = (e) => {
        if(e.key  === 'Enter'){
            searchText(e.target.value) 
        } 
        
    }
    
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={searchImages} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input type="text" name='search' onKeyDown={handleSearchText} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search Image Term..." />
                    <button type="submit" className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded">Search</button>
                </div>
            </form>
        </div>

    )
}

export default ImageSearch