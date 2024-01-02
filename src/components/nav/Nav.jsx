import React from 'react';
import ButtonTheme from '../buttons/ButtonTheme';

export default function Nav() {
  return (
    <div>
      <ButtonTheme />
      <div>
        <h1>LOGO</h1>
      </div>
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>Posts</li>
        </a>
        <a href="#">
          <li>Departamentos</li>
        </a>
      </ul>
    </div>
  );
}
