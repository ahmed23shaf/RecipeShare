import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import BrowseRecipes from './BrowseRecipes';
import AddRecipe from './AddRecipe'; 

function App() {
  const isHomepage = window.location.pathname === '/';

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {isHomepage ? (
            <h1>
              Recipe Share
            </h1>
          ) : (
            <h1 className="app-title">Recipe Share</h1>
          )}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/browse">Browse Recipes</Link>
              </li>
              <li>
                <Link to="/add">Add Recipe</Link> {}
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseRecipes />} />
          <Route path="/add" element={<AddRecipe />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
