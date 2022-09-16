import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdd } from './PostsSlice';


const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    }

    const onContentChanged = (e) => {
        setContent(e.target.vale)
    }

    const onSavePostTitle = () => {
      if (title && content) {
        dispatch(
          postAdd({
            id: nanoid,
            title,
            content
          })
        )
        setTitle('')
        setContent('')
      }
    }
    
  return (
    <section>
      <div>
        <h2>add new post</h2>
        <form>
            <label htmlFor='postTitle'>post title:</label>
            <input type="text" id='postTitle' name='postTitle' value={title} onChange={(e) => onTitleChanged(e)} />
            <label htmlFor='postContent'>post content:</label>
            <input type="text" id='postContent' name='postContent' value={content} onChange={(e) => onContentChanged(e)} />

            <button onClick={() => onSavePostTitle()}>save post</button>
        </form>
      </div>
    </section>
  )
}

export default AddPostForm
