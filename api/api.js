

const searchOpenLibrary = async (query) => {
    try{
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`);
        const data = await response.json();
        return data;
    } catch(error){
        throw new Error(error);
    }
};


// const handleSearch = async () => {
//     // Make API call to Google Books using the query
//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//     const data = await response.json();
//     setResults(data.items);
// };

export { searchOpenLibrary };
