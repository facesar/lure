import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <h1>home</h1>
      <Link to='coco1'><button>coco 1</button></Link>
      <Link to='coco3'><button>coco 3</button></Link>
      <Outlet/>
    </div>
  )
}

export default Home
