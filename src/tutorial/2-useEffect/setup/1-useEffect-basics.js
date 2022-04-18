import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  });

  useEffect(() => {
    console.log('hello world');
  }, []);

  // if you want useEffect to only run in the initial render, send
  // an empty array as dependency list
  // useEffect(() => {
  //   console.log('call useEffect');
  //   if (value > 0) {
  //     document.title = `New Messages(${value})`;
  //   }
  // }, []);

  // if you want useEffect to run only after changes in a certain set
  // set of data, add that to the dependency list. This way you'll
  // enforce useEffect to stay still during every re-render and only
  // kick in at certain points (like when 'value' here is updated)
  // useEffect(() => {
  //   console.log('call useEffect');
  //   if (value > 0) {
  //     document.title = `New Messages(${value})`;
  //   }
  // }, [value]);

  console.log('render component');
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>click me</button>
  </>;
};

export default UseEffectBasics;
