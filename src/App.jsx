import React, { useContext } from 'react';
import ButtonTheme from './components/ButtonTheme';
import { DarkModeContext } from './context/DarkMode';

export default function App() {
  const { theme } = useContext(DarkModeContext);
  return (
    <div className={theme}>
      <ButtonTheme />
      <h1>Intranet Project</h1>
      <p>Projeto com integração de api node/express</p>
      <p>Com autenticação de usuario</p>
    </div>
  );
}
