import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='row'>
      <div>React Context App</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}