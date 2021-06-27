import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    let recipe = {
        name: 'Pizza',
        ingredients: ['Flour', 'Cheddar', 'Olive oil', 'Tomato sauce', 'Mushrooms'],
        calories: 400,
    };
    return (
      <div className="my__Component">
        <h3>{`Recipe: ${recipe.name}`}</h3>
        <h5>{`Calories: ${recipe.calories}`}</h5>
        <ol>
            {
            recipe.ingredients.map((ingredient, index) => {
                console.log("Ingredient: ", ingredient)
                return (
                    <li className="myLi" key={index}>{ingredient}</li>
                )
             })
            }
        </ol>
        <hr />
      </div>
    );
  };
}

export default MyComponent;
