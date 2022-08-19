import { JssProvider } from 'react-jss';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components 
import CocoOne from './app/CocoOne';
import CocoTree from './app/CocoTree';
import Home from './app/Home';

const generateId = (rule) => `${rule.key}`; 

function App() {

  const location = useLocation();

  return (
    <JssProvider generateId={generateId}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />}/>
        <Route path='/coco1' element={<CocoOne />}/>
        <Route path='/coco3' element={<CocoTree />}/>
      </Routes>
    </JssProvider>
  );
}

export default App;
