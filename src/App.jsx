import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from './context/DarkMode';
import Home from './pages/Home';

export default function App() {
  const { theme } = useContext(DarkModeContext);

  return (
    <div className={theme}>
      <Home />
    </div>
  );
}
