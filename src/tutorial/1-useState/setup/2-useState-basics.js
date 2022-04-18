import React, { useState } from 'react';

/*
    - Hooks will start with 'use...'
    - component name we invoke these hooks in, must be in uppercase
    - the hook must be in the function / component body
    - the hook cannot be called conditionally
 */

const UseStateBasics = () => {
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
