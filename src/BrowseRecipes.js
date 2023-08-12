import React, { useState, useEffect } from 'react';
import './BrowseRecipes.css';
import { Link } from 'react-router-dom';

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
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="recipe-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="recipe-card-content">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BrowseRecipes;
