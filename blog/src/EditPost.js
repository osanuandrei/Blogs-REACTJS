import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams} from 'react-router-dom';
import api from './api/posts';
import { format  } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import DataContext from './Context/DataContext';
import { useContext } from 'react';


const EditPost = ( ) => {
  const { posts, setPosts} = useContext(DataContext);
    const navigate = useNavigate();
    const [editBody, setEditBody]=useState('');
  const [editTitle, setEditTitle] = useState('');
    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd , yyyy pp')
        const updatedPost = {id, title: editTitle, datetime, body : editBody}
        try{
          const response = await api.put(`/posts/${id}`, updatedPost)
          setPosts(posts.map(post => post.id === id ? {...response.data} : post ))
          setEditTitle('');
          setEditBody('');
          navigate('/');
         
        }
        catch(err){
          console.log(`Error ${err.messsage}`);
        }
    
      }
      const { id } = useParams();
      const post = posts.find(post=> (post.id).toString() === id )
      useEffect( () => {
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
        
      },[post, setEditBody,setEditTitle])
  return (
    <main className='NewPost'>
        {editTitle && 
        <>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='postTitle'>Title</label>
        <input 
        className='postTitle'
        type='text'
        required
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}>

        </input>
        <label htmlFor='postBody'>Post</label>
        <textarea
        id='postBody'
        required
        value={editBody}
        onChange={(e) => setEditBody(e.target.value)}/>
        <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>

      </form>
      </>
        }

      
    </main>
        
  )
}

export default EditPost
