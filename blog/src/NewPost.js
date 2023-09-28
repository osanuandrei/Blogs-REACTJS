import React, { useContext, useState } from 'react';
import { format  } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const NewPost = ({posts, setPosts}) => {
  const navigate = useNavigate();
  const [postTitle,setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length-1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd , yyyy pp')
    const newPost = {id, title: postTitle, datetime, body : postBody}
    const allPosts = [...posts, newPost]
    setPosts(allPosts);
   
    setPostTitle('');
    setPostBody('');
    navigate('/');

  }
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title</label>
        <input 
        className='postTitle'
        type='text'
        required
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}>

        </input>
        <label htmlFor='postBody'>Post</label>
        <textarea
        id='postBody'
        required
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}/>
        <button type='submit'>Submit</button>

      </form>
      
    </main>
  );
};

export default NewPost;
