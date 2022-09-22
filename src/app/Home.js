import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

import Loading from '../components/Loading';

import Crypto from '../components/Crypto';


const Home = () => {

  const [spinner, setSpinner] = useState(true);

  setTimeout(() => {
    setSpinner((prev) => prev = false)
  }, 1000);

  let content;

  if (spinner) {
    content = <Loading loading='loading...' />;
  } else {
    content = 
    <React.Fragment>
      <h1>home</h1>
      <Link to='coco1'><button>coco 1</button></Link>
      <Link to='coco3'><button>coco 3</button></Link>
      <React.Fragment>
        < Crypto/>
      </React.Fragment>
    </React.Fragment>
  }

  return (
    <div>
      {
        content
      }
      <Outlet/>
    </div>
  )
}

export default Home
