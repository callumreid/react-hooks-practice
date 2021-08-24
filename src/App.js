import './App.css';

import {useState} from 'react';


const App = () => {
  const [count, setCount] = useState(10);
  return (
    <div className="App">
      <div>
        <button onClick={() => setCount(currentCount => currentCount + 1)} >+</button>
        <div>{count}</div>
      </div>
    </div>
  );
}

export default App;
