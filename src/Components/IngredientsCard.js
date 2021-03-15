import React from 'react';
import {useSelector} from 'react-redux';

import './IngredientsCard.scss';

const IngredientsCard = (props) => {
    const {id, amount, measurement, name} = props;

    const specials= useSelector(state => state.specials.specialsData);

    const renderMeasurement =() =>{
        if(measurement){
            return <span>{measurement} of</span>
        }
    }

    return (
      <div className="ingredientCard">
        <div className="ingredientCard__body">
          <h5>
            {amount} {renderMeasurement()} {name}{" "}
          </h5>
          <div>
            {specials.map((special) => {
              if (special.ingredientId === id) {
                return (<div className="ingredientCard__specials">
                    <p>Title: {special.title}</p>
                    <p>Type: {special.type}</p>
                    <p>{special.text}</p>
                    </div>)
              }
              return(<></>)
            })}
          </div>
        </div>
      </div>
    );
}

export default IngredientsCard
