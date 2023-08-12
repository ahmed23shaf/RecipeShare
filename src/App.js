import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import BrowseRecipes from './BrowseRecipes';
import AddRecipe from './AddRecipe';
import RecipePage from './RecipePage';

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Recipe Share</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/browse">Browse Recipes</Link>
              </li>
              <li>
                <Link to="/add">Add Recipe</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseRecipes />} />
          <Route path="/add" element={<AddRecipe setRecipes={setRecipes} />} />
          <Route path="/recipe/:id" element={<RecipePage recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
