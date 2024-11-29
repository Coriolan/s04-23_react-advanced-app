import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function MainContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div class={`content ${theme}`}>
      <h1>Welcome to my app</h1>
      <p>Use Context API to share data between components.</p>
    </div>
  );
}
