import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import "../css/restaurantpage.css";

export const func_tag = (restaurant) => {
  const tag_arr = restaurant.tag.split(",").map((v) => v.trim());

  const hash_string = tag_arr
    .filter((v) => v)
    .map((v) => "#" + v.trim())
    .join(" ");
  return hash_string;
};
function ShowingRestaurant() {
  const { restaurant } = useSelector((state) => state.restaurant);

  return (
    <div className="resmainwrap">
      <div className="main">
        <div className="box">
          {restaurant.map &&
            restaurant.map((v, i) => (
              <div key={i} style={{ "--i": i + 1 }}>
                <div>
                  <Link to={`/restaurant/detailinfo?name=${v.name}`}>
                    <img
                      alt="example"
                      src={`http://localhost:8010/${v.Images[0].src}`}
                    />
                  </Link>
                </div>

                <div className="box-info">
                  <span>{v.name}</span>
                  {/* <span>{func_tag(v)}</span> */}
                </div>
              </div>
            ))}
        </div>
        <div className="test">
          <img src="/images/table.png" alt="" />
        </div>
      </div>
    </div>

    /* {restaurant.map &&
        restaurant.map((v, i) => (
          <span style={`${i+1}`} key={i} hoverable style={{ width: "204px", margin: "10px" }}>
            <Link to={`/restaurant/detailinfo?name=${v.name}`}>
              <img
                alt="example"
                src={`http://localhost:8010/${v.Images[0].src}`}
              />
            </Link>
            <span>{v.name}</span>
            <span>{func_tag(v)}</span>
          </span>
          // <Card
          //   key={i}
          //   hoverable
          //   style={{ width: "204px", margin: "10px" }}
          //   cover={
          //     <Link to={`/restaurant/detailinfo?name=${v.name}`}>
          //       <img
          //         style={{ width: "100%", height: "225px" }}
          //         alt="example"
          //         src={`http://localhost:8010/${v.Images[0].src}`}
          //       />
          //     </Link>
          //   }
          // >
          //   <Meta title={v.name} description={func_tag(v)} />
          // </Card>
        ))}
    </div> */
  );
}

export default ShowingRestaurant;
