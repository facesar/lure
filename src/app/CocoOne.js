import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CocoOne = () => {
  return (
    <div>
      <h1>coco 1</h1>
      <Link to='/'><button>home</button></Link>
      <Link to='/coco3'><button>coco 3</button></Link>
      <Outlet/>
    </div>
  )
}

export default CocoOne
