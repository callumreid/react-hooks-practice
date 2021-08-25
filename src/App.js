import './App.css';
import { useForm } from './useForm';
import { useEffect, useState, useRef } from 'react';
import { Hello } from './Hello';
import {useFetch} from './useFetch'

const App = () => {
  const [values, handleChange] = useForm({email: '', password: '', firstName: ''});
  const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])

  const inputRef = useRef();

  return (
    <div className="App">
      <div>{!data ? 'loading...' : data}</div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)} >increment</button>
      <button onClick={() => setShowHello(!showHello)}>hello?</button>
      {showHello && <Hello />}
      <input
      name='firstName'
      value={values.firstName}
      onChange={handleChange}
      placeholder='Tom'
      ref={inputRef}
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
      <button
      onClick={() => inputRef.current.focus()}
      >FOCUS</button>
    </div>
  );
}

export default App;
