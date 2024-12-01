import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Navbar';

export default function Layout(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className={`header ${theme}`}>
        <Navbar />
      </div>
      {props.children}
    </div>
  );
}
