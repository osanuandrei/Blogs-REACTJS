import {  useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import api from './api/posts';
import EditPost from './EditPost';
function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  
  
  useEffect( () =>{
    const filteredResults= posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase())
  || ((post.title).toLowerCase()).includes(search.toLowerCase()) );
  setSearchResult(filteredResults.reverse());


  }
  , [posts, search])

  useEffect( () => {
    const fetchPosts = async () => {
      try{
        const response = await api.get('/posts');
        setPosts(response.data);

      }
      catch (err){
        //not in the 200 response range
        console.log(err.response.data);

      }
    }
    fetchPosts();

  }, [])
 
  
  
 

  
  return (
    <div className="App">
      
      <Header />
      <Nav search={search} setSearch={setSearch}/>
      
        <Routes >
          <Route path="/" element={<Home  posts={searchResult}/>} />
          <Route path="/post" element = {<NewPost posts={posts}  setPosts={setPosts} /> } />
          <Route path="/edit/:id" element = {<EditPost posts={posts} setPosts={setPosts}/>}/>
          <Route path="/post/:id" element={<PostPage posts={posts} setPosts={setPosts}/> } />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Missing} />
        </Routes>
      
      <Footer />
      
     


    </div>
  );
}

export default App;
