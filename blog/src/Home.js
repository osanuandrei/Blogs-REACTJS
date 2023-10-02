
import Feed from './Feed';
import { useContext } from 'react';
import DataContext from './Context/DataContext';

const Home = ( ) => {
  const {searchResult, isLoading  , fetchError} = useContext(DataContext);
 
  return (
    <main className='Home'>
       {isLoading &&
       <p className='statusMsg'>Loading Posts</p> 
       }
       {!isLoading && fetchError && 
       <p className='statusMsg' style={{ color: "red" }}>{fetchError}</p>
       }
       {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult}/> : <p className='statusMsg'>No Posts to Display</p>)}
    </main>
  );
};

export default Home;
