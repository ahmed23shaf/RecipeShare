import React, { useState, useEffect } from 'react';
import './BrowseRecipes.css';

function BrowseRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <section className="browse-recipes">
      <h2>Browse Recipes</h2>
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseRecipes;
