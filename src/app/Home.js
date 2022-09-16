import React from 'react';
import { Link, Outlet } from "react-router-dom";

import PostsList from './store/features/post/PostsList';
import AddPostForm from './store/features/post/AddPostForm';


const Home = () => {

  return (
    <div>
      <h1>home</h1>
      <Link to='coco1'><button>coco 1</button></Link>
      <Link to='coco3'><button>coco 3</button></Link>
      <React.Fragment>
        <AddPostForm />
        < PostsList/>
      </React.Fragment>
      <Outlet/>
    </div>
  )
}

export default Home
