import React, { useState } from 'react';

export default function NewCounter() {
  const [count, setCount] = useState(0);
  const [previousClicks, setPreviousClicks] = useState(0);
  const [myString, setMyString] = useState('A string');
  const increase = () => {
    setCount(count + 1);
  };
  const inputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setPreviousClicks(value);
    }
  };
  const concatenate = () => {
    setMyString(myString + myString);
  };
  return (
    <div>
      <label>
        Previous clicks:
        <input type="text" value={previousClicks} onChange={inputChange} />
      </label>
      <p>You clicked {previousClicks + count} times</p>
      <button onClick={increase}>Click me</button>
      <br />
      <p>My String is: {myString}</p>
      <button onClick={concatenate}>Duplicate</button>
    </div>
  );
}
