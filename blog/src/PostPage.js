import api from './api/posts';
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import DataContext from './Context/DataContext';

const PostPage = ( ) => {
  const { posts , setPosts } = useContext(DataContext);
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`);
    const postLists = posts.filter(post => (post.id !== id ) )
    setPosts(postLists);
    navigate('/');
    }
    catch(err){
      console.log(`Error ${err.message}`);
    }

  }
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id );
  return (
    <main className='PostPage'>
      <article className='post'>
        {post && (
          <>
          <h2>{post.title}
          </h2>
          <p className='PostDate'>
          {post.datetime}
          </p>
          <p className='PostBody'>
          {post.body}
          </p>
          <Link to = {`/edit/${post.id}`}><button className='editButton'> Edit the Post </button></Link>
          <button className='deleteButton' onClick={() => handleDelete(post.id) }>Delete Post </button>
          </>
        )}
        {!post && (
          <>
          <h2>Post Page not found</h2>
          <p>Do not be dissapointed</p>
          <Link to = "/">Visit our HomePage</Link>
          </>

        )}

      </article>
    </main>
  );
};

export default PostPage;
