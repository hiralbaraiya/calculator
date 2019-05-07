import React, { useEffect, useState } from 'react';
import './App.css';
import { Parent } from './Parent'
import { ThemeContext } from './Theme'


export const App = () => {
  const [count, setCount] = useState(0);
  const [Abc, setAbc] = useState(1);

  useEffect(() => {
    console.log('effect',count+1)
    //setAbc(count)
  })

  return (
    <div>
      <p>{Abc}</p>
      <ThemeContext.Provider value={count}>
        <Parent></Parent>
      </ThemeContext.Provider>
      <button onClick={() => { setCount(count + 1) }}>click</button></div>
  );

}

