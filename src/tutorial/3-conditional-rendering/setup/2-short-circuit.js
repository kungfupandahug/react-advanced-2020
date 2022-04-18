import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('panda');
  const [isError, setIsError] = useState(false);

  // falsy first argument ('') in || expression will return the 'next' truthy value i.e. 'hello world' here
  // truthy first argument ('k') in || exp will return the first argument 
  const firstValue = text || 'hello world';

  // any falsy argument in && exp will result in nothing
  // all truthy arguments in && exp will return the last argument
  const secondValue = text && 'hello world';

  // examples on how truthy and falsy expressions work
  // return (
  //   <>
  //     <h1>{firstValue}</h1>
  //     <h1>value : {secondValue}</h1>
  //   </>
  // )

  // This code will not work, but we want this type of logic.
  // Need some kind of conditional mechanism when operating with
  // single return statement
  // return (
  //   <>
  //     {if(){console.log('hello world')}}
  //   </>
  // );

  return (
    <>
      <h1>{text || 'john doe'}</h1>
      {/* {text && <h1>hello world</h1>} */}
      {/* {!text && <h1>hello world</h1>} */}

      <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );

};

export default ShortCircuit;
