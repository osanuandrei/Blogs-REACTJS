import { createContext, useState, useEffect } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext();



export const DataProvider = ( { children }) => {
    const {data,fetchError, isLoading} = useAxiosFetch("http://localhost:3500/posts");
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  
  
  useEffect( () =>{
    const filteredResults= posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase())
  || ((post.title).toLowerCase()).includes(search.toLowerCase()) );
  setSearchResult(filteredResults.reverse());


  }
  , [posts, search])

  useEffect(() => {
    setPosts(data);

  },[data])
  
return (
    <DataContext.Provider value = { { 
         search, setSearch, searchResult, fetchError, isLoading, posts, setPosts
    }}>
    {children}
    </DataContext.Provider>
)

}

export default DataContext