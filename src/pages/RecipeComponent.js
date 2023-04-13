import React, { useState } from "react";
import "../styles/Recipe.css";

const RecipeComponent = () => {
  const [meal, setMeal] = useState("");
  const [recipe, setRecipe] = useState(null);

  const handleButtonClick = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    const data = await response.json();
    setRecipe(data.meals ? data.meals[0] : null);
  };

  return (
    <div className="recipe-container">
      <input
        type="text"
        placeholder="Enter a meal"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        className="recipe-input"
      />
      <button onClick={handleButtonClick} className="recipe-button">
        Get Recipe
      </button>
      {recipe && (
        <div className="recipe-result">
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>Ingredients:</h3>
          <ul>
            {Object.keys(recipe).map((key) => {
              if (key.includes("Ingredient") && recipe[key]) {
                return (
                  <li key={key} className="recipe-list-item">
                    {recipe[key]}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <h3>Instructions:</h3>
          <p className="recipe-instructions">{recipe.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeComponent;
