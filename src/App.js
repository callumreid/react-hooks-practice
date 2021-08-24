import './App.css';
import { useForm } from './useForm';
import { useEffect, useState } from 'react';
import { Hello } from './Hello';
import {useFetch} from './useFetch'

const App = () => {
  const [values, handleChange] = useForm({email: '', password: '', firstName: ''});
  const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(0)
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);



  return (
    <div className="App">
      <div>{loading ? 'loading...' : data}</div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)} >increment</button>
      <button onClick={() => setShowHello(!showHello)}>hello?</button>
      {showHello && <Hello />}
      <input
      name='firstName'
      value={values.firstName}
      onChange={handleChange}
      placeholder='Tom'
      ></input>
      <input name='email'
      value={values.email}
      onChange={handleChange}
      placeholder='Tom@gmail.com'
      ></input>
      <input type='password'
      name='password'
      value={values.password}
      onChange={handleChange}
      placeholder='TommysMommy'
      ></input>
    </div>
  );
}

export default App;
