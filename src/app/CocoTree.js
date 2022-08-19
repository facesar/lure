import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CocoTree = () => {
  return (
    <div>
      <h1>coco 3</h1>
      <Link to='/'><button>home</button></Link>
      <Link to='/coco1'><button>coco 1</button></Link>
      <Outlet/>
    </div>
  )
}

export default CocoTree
