import React from "react";
const { DateTime } = require("luxon");

function MenuMeal(props) {
  const {
    title,
    description,
    max_reservations,
    price,
    location,
    when_date,
    imgUrl,
    isAvailable,
  } = props.meal;

  return (
    <div style={{ textAlign:"center", textDecoration:"unset"}}>
      <h4>{title}</h4>
      <h6>{description}</h6>
      <h6>{max_reservations}</h6>
      <h6>{price}</h6>
      {/* <img src={imgUrl} /> */}
      <h6>
        {DateTime.fromISO(when_date).toLocaleString(
          DateTime.DATE_MED_WITH_WEEKDAY
        )}
      </h6>
    </div>
  );
}

export default MenuMeal;
