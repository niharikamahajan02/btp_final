import React, { useState } from 'react';

function MealSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);

  function handleSearch(e) {
    e.preventDefault();

    // Fetch meals from API
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        // Check for empty search result
        if (data.meals === null) {
          setMeals([]);
        } else {
          setMeals(data.meals);
        }
      });
  }

  function handleGetRecipe(mealId) {
    // Fetch meal details from API
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(res => res.json())
      .then(data => {
        const meal = data.meals[0];

        // Display meal details
        const ingredients = [];

        // Get ingredients and measurements
        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            ingredients.push(
              `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
          } else {
            break;
          }
        }

        const mealDetails = `
          <h1>${meal.strMeal}</h1>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <h3>Ingredients</h3>
          <ul>
            ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
          </ul>
          <h3>Instructions</h3>
          <p>${meal.strInstructions}</p>
        `;

        // Display meal details
        setMeals([{idMeal: mealId, mealDetails}]);
      });
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {meals.length === 0 ? (
        <p>No search results found for '{searchTerm}'</p>
      ) : (
        <ul>
          {meals.map(meal => (
            <li key={meal.idMeal}>
              <div>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <div>
                <h3>{meal.strMeal}</h3>
                <button onClick={() => handleGetRecipe(meal.idMeal)}>
                  Get Recipe
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
