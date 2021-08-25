import React, {useRef} from 'react';

export const Hello = () => {
  React.useEffect(() => {
    console.log('rendered');
    return () => {
      console.log('unmounted');
    }
  }, []);

  const renders = useRef(0);

  //console.log('hello renders: ', renders.current++)

  return (
  <div>
    <h1>hello</h1>
  </div>
  )

}