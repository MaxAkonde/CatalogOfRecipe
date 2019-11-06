import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="row">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} class="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{calories}</p>
          <p className="card-text">
            <ul>
              {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
