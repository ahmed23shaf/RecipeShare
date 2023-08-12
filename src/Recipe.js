import React from 'react';

function Recipe({ title, description }) {
  return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Recipe;
