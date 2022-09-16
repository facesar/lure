import React from 'react';
import { useSelector } from 'react-redux';
import { contentPost } from './PostsSlice';

import styles from '../../../../styles/index.module.css';

const PostsList = () => {
    const posts = useSelector(contentPost);

    const renderPosts = posts.map((d) => (
        <article className={styles.article} key={d.id}>
            <h2>{d.title}</h2>
            <p>{d.content}</p>
        </article>
    ));

  return (
    <div>
      <h1>posts</h1>
       { renderPosts }
    </div>
  )
}

export default PostsList
