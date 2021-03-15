import React from "react";

import RecipeModal from "./RecipeModal";
import "./RecipeCard.scss";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipeCard">
      <div className="recipeCard__body">
        <img
          src={`http://localhost:3001/${recipe.images.small}`}
          alt="recipecard"
          className="recipeCard__image"
        />
        <h5>{recipe.title}</h5>
      </div>

      <RecipeModal recipe={recipe} />
    </div>
  );
};

export default RecipeCard;
