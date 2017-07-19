import React from 'react';

const MenuItem = ({ menuItem }) => {
  console.log(menuItem);
  const {
    calories,
    calories_from_fat,
    fat,
    name,
    saturated_fat,
    carbs,
    cholestrol,
    dietary_fiber,
    protein,
    sodium,
    sugars,
    trans_fat
  } = menuItem;
  return (
    <div>
      <h2>
        {name}
      </h2>
      <ul>
        <li>
          Calories: {calories}
        </li>
        <li>
          Calories From Fat: {calories_from_fat}
        </li>
        <li>
          Total Fat: {fat}
        </li>
        <li>
          Saturated Fat: {saturated_fat}
        </li>
        <li>
          Trans Fat: {trans_fat}
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
