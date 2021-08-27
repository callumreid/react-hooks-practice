import './App.css';
import { useForm } from './useForm';
import { useEffect, useState, useRef, useLayoutEffect} from 'react';
import { Hello } from './Hello';
import {useFetch} from './useFetch'

const App = () => {
  const [values, handleChange] = useForm({email: '', password: '', firstName: ''});
  const [showHello, setShowHello] = useState(true);





  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect())
  }, [])

  return (
    <div className="App">
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
