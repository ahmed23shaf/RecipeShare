import React from 'react';
import Recipe from './Recipe';

function BrowseRecipesBackend({ recipes }) {
  return (
    <div>
      <h2>Browse Recipes</h2>
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} title={recipe.title} description={recipe.description} />
        ))}
      </div>
    </div>
  );
}

export default BrowseRecipesBackend;
