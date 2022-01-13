import React from 'react';
import styles from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={styles.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((i, index) => (
          <li key={index}>{i.text}</li>
        ))}
      </ul>
      <p>{Math.floor(calories)}</p>
      <img className={styles.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
