import { JssProvider } from 'react-jss';

import Title from './components/Title';

const generateId = (rule) => `${rule.key}`; 

function App() {
  return (
    <JssProvider generateId={generateId}>
      <div className="app">
        <h2 className="app_text">hello cucu</h2>
        <Title />
      </div>
    </JssProvider>
  );
}

export default App;
