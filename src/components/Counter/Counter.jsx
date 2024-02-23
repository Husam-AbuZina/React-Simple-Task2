import React,  { useState } from 'react'

function Counter() {

    let [count, setCount] = useState(0);

    const changeCounter = () => {
        setCount(count+1);
        console.log(count);
    }

  return (
    <>
    <button onClick={changeCounter} > Husam {count} </button>
    </>
  )
}

export default Counter