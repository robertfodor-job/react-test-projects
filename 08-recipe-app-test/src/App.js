import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

const id = process.env.REACT_APP_ID;
const key = process.env.REACT_APP_KEY;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const mainUrl = ` https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${id}&app_key=${key}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(mainUrl);
      const data = await result.json();
      setRecipes(data.hits);
    };
    fetchData();
  }, [query]);

  const handleUpdateSearch = e => {
    setSearch(e.target.value);
  };

  const handleQuery = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleQuery}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={handleUpdateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => {
          return (
            <Recipe
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
