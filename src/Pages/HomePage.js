import React from "react";
import { useSelector } from "react-redux";

import RecipeCard from "../Components/RecipeCard";
import "./HomePage.scss";
const HomePage = () => {
  const { recipesData } = useSelector((state) => state.recipes);

  if (!recipesData) {
    return <h1>loading</h1>;
  }
  return (
    <div className="homepage">

      {recipesData.map((recipe) => {
        return <RecipeCard key={recipe.uuid} recipe={recipe} />;
      })}
    </div>
  );
};

export default HomePage;
