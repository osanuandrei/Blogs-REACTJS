import {  useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate, Link } from 'react-router-dom';
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
function App() {
  const [posts, setPosts] = useState([{
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }]);
  const [search, setSearch] = useState('');
  
  
  useEffect( () =>{
    const filteredResults= posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase())
  || ((post.title).toLowerCase()).includes(search.toLowerCase())  );
  setSearchResult(filteredResults.reverse());


  }
  , [posts, search])
 
  const [searchResult, setSearchResult] = useState([]);
 

  
  return (
    <div className="App">
      <Router>
      <Header />
      <Nav search={search} setSearch={setSearch}/>
      
        <Routes >
          <Route path="/" element={<Home  posts={searchResult}/>} />
          <Route path="/post" element = {<NewPost posts={posts}  setPosts={setPosts} /> } />
          <Route path="/post/:id" element={<PostPage posts={posts} setPosts={setPosts}/> } />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Missing} />
        </Routes>
      
      <Footer />
      </Router>
     


    </div>
  );
}

export default App;
