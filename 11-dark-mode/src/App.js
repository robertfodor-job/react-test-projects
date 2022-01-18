import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [state, setState] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (state === 'light-theme') setState('dark-theme');
    else setState('light-theme');
  };

  useEffect(() => {
    document.documentElement.className = state;
    localStorage.setItem('theme', state);
  }, [state]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark Mode Switch</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map(item => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
