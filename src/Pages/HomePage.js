import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import RecipeCard from "../Components/RecipeCard";
import "./HomePage.scss";
const HomePage = (props) => {
  const { recipesData } = useSelector((state) => state.recipes);

  if (!recipesData) {
    return <h1>loading</h1>;
  }
  return (
    <div className="homepage">
   
        <Link className="homepage__btncon" to='/create'>
        <Button className="homepage__btn">Create Recipe</Button>
        </Link>
      
    
      <div className="homepage__cards">
     
      {recipesData.map((recipe) => {
        return <RecipeCard key={recipe.uuid} recipe={recipe} />;
      })}
       
      </div>
      

    </div>
  );
};

export default HomePage;
