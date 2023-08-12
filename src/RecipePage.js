import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/recipes')
      .then(response => response.json())
      .then(data => {
        const foundRecipe = data.find(recipe => recipe.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          setRecipe(null);
        }
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, [id]);

  if (!recipe) {
    return <div>...</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul className="left-align">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Directions:</h3>
      <ol className="left-align">
        {recipe.directions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipePage;
