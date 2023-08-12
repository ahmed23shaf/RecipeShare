import React, { useState } from 'react';
import './AddRecipe.css';

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleDirectionsChange = (e) => {
    setDirections(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      title: title,
      description: description,
      ingredients: ingredients.split('\n').map(item => item.trim()),
      directions: directions.split('\n').map(item => item.trim()),
    };

    const addResponse = await fetch('http://localhost:5000/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });

    if (addResponse.ok) {
      console.log('Recipe added successfully.');
      // Clear input fields
      setTitle('');
      setDescription('');
      setIngredients('');
      setDirections('');
    } else {
      console.error('Failed to add recipe. Please try again.');
    }
  };

  return (
    <section className="add-recipe">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients (separated by new lines):</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={handleIngredientsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="directions">Directions (separated by new lines):</label>
          <textarea
            id="directions"
            name="directions"
            value={directions}
            onChange={handleDirectionsChange}
            required
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </section>
  );
}

export default AddRecipe;
