const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const databaseFilePath = './data/recipes.json';

app.get('/api/recipes', (req, res) => {
    const recipes = loadRecipes();
    res.json(recipes);
  });
  

  app.post('/api/recipes', (req, res) => {
    const { title, description } = req.body;
  
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
  
    
    const recipes = loadRecipes();
  
    
    const id = recipes.length > 0 ? recipes[recipes.length - 1].id + 1 : 1;
  
    
    const newRecipe = { id, title, description };
  
    
    recipes.push(newRecipe);
  
    
    saveRecipes(recipes);
  
    res.status(201).json({ message: 'Recipe added successfully' });
  });


app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
