import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

export default function Layout(props) {
  return (
    <ThemeContextConsumer>
      {(context) => {
        <div>
          <p>Hello</p>
          {context.theme}
          <button onClick={context.toogleTheme}>Toggle Theme</button>
        </div>;
      }}
    </ThemeContextConsumer>
  );
}
