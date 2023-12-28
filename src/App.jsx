import React, { useContext, useEffect, useState } from 'react';
import ButtonTheme from './components/ButtonTheme';
import { DarkModeContext } from './context/DarkMode';
import api from './services/api';
import Home from './pages/Home';

export default function App() {
  const { theme } = useContext(DarkModeContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className={theme}>
      <ButtonTheme />
      <Home posts={posts} />
    </div>
  );
}
