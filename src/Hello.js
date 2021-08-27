import React, {useRef, useEffect, useState} from 'react';
import { useFetch } from './useFetch';

export const Hello = () => {
  React.useEffect(() => {
    console.log('rendered');
    return () => {
      console.log('unmounted');
    }
  }, []);

  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])


  const divRef = useRef();

  return (
  <div>
    <h1>hello</h1>
    <div style={{display: 'flex'}}>
      <div ref={divRef}>{!data ? 'loading...' : data}</div>

    </div>
    <div>{count}</div>
    <button onClick={() => setCount(c => c + 1)} >increment</button>
  </div>
  )

}