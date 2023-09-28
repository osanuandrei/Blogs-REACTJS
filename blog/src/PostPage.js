import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
const PostPage = ( {posts, setPosts}) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const postLists = posts.filter(post => (post.id !== id ) )
    setPosts(postLists);
    navigate('/');

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
          <button onClick={() => handleDelete(post.id) }>Delete Post </button>
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
