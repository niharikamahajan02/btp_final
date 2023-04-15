import "../styles/Fromingre.css"
import bgImag from '../images/ingre4.jpg';

import React, { useState } from 'react';
import Layout from "../components/Layout/Layout";

function RecipeFinder() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [recipeInstructions, setRecipeInstructions] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  const APP_KEY = '783b321a40d848cdbbc0ef32e772fef2';

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_KEY}&query=${query}&addRecipeInformation=true`
      );
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecipeInstructions = async recipeId => {
    try {
      const instructionsResponse = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${APP_KEY}`
      );
      const instructionsData = await instructionsResponse.json();
  
      const ingredientsResponse = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=${APP_KEY}`
      );
      const ingredientsData = await ingredientsResponse.json();
  
      setRecipeInstructions({
        instructions: instructionsData,
        ingredients: ingredientsData.ingredients
      });
      setSelectedRecipe(recipeId);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Layout>
    <div className="cont1" >
  <div className="ingre-cont"> 
<h1 className="head" color="white">ENTER INGREDIENTS</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      
    
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img className="limg" src={recipe.image} alt={recipe.title} width="300" height="200"  />
          <div>
          <button className="btn" onClick={() => getRecipeInstructions(recipe.id)}>View Recipe</button>
          </div>
          {selectedRecipe === recipe.id && recipeInstructions.instructions.length > 0 && (
            <>
              <h2>Instructions:</h2>
              {recipeInstructions.instructions[0].steps.map((step, index) => (
                <p key={step.number}>
                  {index + 1}. {step.step}
                </p>
              ))}
              <h2>Extra ingredients:</h2>
              <ul>
                {recipeInstructions.ingredients.map((ingredient,index) => (
                  <p key={ingredient.id}>
                   {index + 1}. {ingredient.name}</p>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
    </div>
    
  
    </Layout>
  );
}

export default RecipeFinder;