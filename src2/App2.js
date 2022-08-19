import './App.css';

import React from 'react';

import COMPONENT_1_W from './components/wrapComponents/Component_1_wr';
import COMPONENT_2_W from './components/wrapComponents/Component_2_wr';

const App2 = () => {
  return (
    <div className='App2'>
      <COMPONENT_1_W />
      <COMPONENT_2_W />
    </div>
  )
}

export default App2;
