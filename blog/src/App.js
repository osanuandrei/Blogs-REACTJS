import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
function App() {
  const [search, setSearch] = useState(' ');
  return (
    <div className="App">
      <Router>
      <Header />
      <Nav />
      
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/post" Component={NewPost} />
          <Route path="/post/:id" Component={PostPage} />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Missing} />
        </Routes>
      
      <Footer />
      </Router>


    </div>
  );
}

export default App;
