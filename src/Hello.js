import React from 'react';

export const Hello = () => {
  React.useEffect(() => {
    console.log('rendered');
    return () => {
      console.log('unmounted');
    }
  }, []);

  return (
  <div>
    <h1>hello</h1>
  </div>
  )

}