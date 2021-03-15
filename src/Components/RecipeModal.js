import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Badge } from "reactstrap";

//ICONS
import { GiCookingPot } from "react-icons/gi";
import { AiTwotonePieChart, AiOutlineFieldTime } from "react-icons/ai";

import IngredientsCard from './IngredientsCard';
import "./RecipeModal.scss";
const ModalFullscreenExample = ({ recipe }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="recipemodal">
      <Button className="recipemodal__btn" onClick={toggle}>
        View Recipe
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <div className="recipemodal__body">
            <div className="recipemodal__left">
              <div className="recipemodal__imgcon">
                <img
                  src={`http://localhost:3001/${recipe.images.medium}`}
                  alt="recipemodal"
                  className="recipemodal__image"
                />
              </div>
              <div className="recipemodal__icons">
                <div>
                  <AiTwotonePieChart />
                  <span>{recipe.servings} Servings</span>
                </div>
                <div>
                  <AiOutlineFieldTime />
                  <span>{recipe.prepTime}mins prep time</span>
                </div>
                <div>
                  <GiCookingPot />
                  <span>{recipe.cookTime}mins cook time</span>
                </div>
              </div>
            </div>

            <div className="recipemodal__details">
              <h1>{recipe.title}</h1>
              <h5>{recipe.description}</h5>
              <br />
              <h5>Directions:</h5>
              {recipe.directions.map((item, i) => {
                if (item.optional) {
                  return (
                    <p>
                      {i + 1}. {item.instructions}{" "}
                      <Badge color="dark">Optional</Badge>
                    </p>
                  );
                }
                return (
                  <p>
                    {i + 1}. {item.instructions}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="recipemodal__ingredients">
            <h5>Ingredients:</h5>
            <div className="recipemodal__ingredientsCon">
              {recipe.ingredients.map((item, i) => {
                return (
                  <IngredientsCard
                    id={item.uuid}
                    amount={item.amount}
                    measurement={item.measurement}
                    name={item.name}
                  />
                );
              })}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalFullscreenExample;
