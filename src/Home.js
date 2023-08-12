import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <section className="featured-recipe">
        <div className="featured-recipe-details">
          <h2>Featured Recipe:</h2>
          <p>Chocolate Chip Cookies</p>
        </div>
        <div className="featured-recipe-image">
          <img src={`${process.env.PUBLIC_URL}/images/chocolate-chip-cookie.jpg`} alt="Chocolate Chip Cookie" />
        </div>
      </section>

      <section className="ingredients">
        <h2>Ingredients:</h2>
        <ul className="ingredient-list">
          <li>1 cup (2 sticks) unsalted butter, softened</li>
          <li>3/4 cup granulated sugar</li>
          <li>3/4 cup packed brown sugar</li>
          <li>1 tsp vanilla extract</li>
          <li>2 large eggs</li>
          <li>2 1/4 cups all-purpose flour</li>
          <li>1 tsp baking soda</li>
          <li>1/2 tsp salt</li>
          <li>2 cups semisweet chocolate chips</li>
          <li>1 cup chopped nuts (optional)</li>
        </ul>
      </section>

      <section className="instructions">
        <h2>Instructions:</h2>
        <ol className="instruction-list">
          <li>Preheat the oven to 375°F (190°C). Line baking sheets with parchment paper.</li>
          <li>In a large mixing bowl, beat the softened butter, granulated sugar, brown sugar, and vanilla extract until creamy.</li>
          <li>Add the eggs, one at a time, beating well after each addition.</li>
          <li>In a separate bowl, combine the all-purpose flour, baking soda, and salt. Gradually add the dry ingredients to the butter mixture, mixing well after each addition.</li>
          <li>Stir in the chocolate chips and chopped nuts (if using).</li>
          <li>Drop rounded tablespoons of dough onto the prepared baking sheets, about 2 inches apart.</li>
          <li>Bake for 9 to 11 minutes or until golden brown.</li>
          <li>Cool on the baking sheets for a few minutes before transferring to wire racks to cool completely.</li>
          <li>Enjoy your delicious homemade Chocolate Chip Cookies!</li>
        </ol>
      </section>
    </div>
  );
}

export default Home;
