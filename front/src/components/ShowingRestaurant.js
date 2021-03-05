import React from "react";
import "../css/restaurantpage.css";
import Restaurant from "../pages/Restaurant";

export const func_tag = (restaurant) => {
  const tag_arr = restaurant.tag.split(",").map((v) => v.trim());

  const hash_string = tag_arr
    .filter((v) => v)
    .map((v) => "#" + v.trim())
    .join(" ");
  return hash_string;
};
function ShowingRestaurant({ props }) {
  return <Restaurant props={props} search={true} />;
}

export default ShowingRestaurant;
