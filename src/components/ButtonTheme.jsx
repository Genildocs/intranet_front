import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkMode.jsx';

export default function ButtonTheme() {
  const { theme, toggleTheme } = useContext(DarkModeContext);
  return (
    <div className="flex justify-end mr-5">
      <button onClick={toggleTheme} className=" font-semibold">
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
    </div>
  );
}
