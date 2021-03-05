import React, { useEffect } from "react";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
import { GET_DETAIL_INFO_REQUEST } from "../reducers/restaurant";

import { AiOutlinePhone } from "react-icons/ai";
import { MdAccessTime, MdDescription } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import ImageSlide from "./ImageSlide";
import { func_tag } from "./ShowingRestaurant";
function DetailType(props) {
  const { restaurant } = useSelector((state) => state.restaurant);
  let query = queryString.parse(props.location.search);
  const dispatch = useDispatch();

  const tag_arr = (restaurant.tag && restaurant.tag.split(",")) || [];
  const trim_tag_arr = tag_arr.map((v) => v.trim());

  useEffect(() => {
    dispatch({
      type: GET_DETAIL_INFO_REQUEST,
      data: query.name,
    });
  }, []);

  return (
    <div style={{ margin: "0 auto", width: "1100px", position: "relative" }}>
      <ImageSlide />
      <div
        style={{
          width: "1000px",
          margin: "0 auto",
          background: "#f8f9fa",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "50px",
          zIndex: "0",
        }}
      ></div>
      <div style={{ position: "relative", top: "-20px", zIndex: "10" }}>
        <div
          style={{
            border: "1px solid black",
            width: "800px",
            height: "160px",
            margin: "0 auto",
            textAlign: "center",
            background: "white",
            marginBottom: "1rem",
            boxShadow: "1px 1px 11px 1px rgba(90,90,90,1)",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <strong style={{ fontSize: "32px", marginRight: "10px" }}>
                {restaurant && restaurant.name}
              </strong>
              <span style={{ color: "#9a9a9a" }}>
                {restaurant && restaurant.foodtype}
              </span>
            </div>
            <div>
              <div style={{ margin: "0 auto", width: "100px" }}>
                <img
                  src={
                    restaurant.star === 3
                      ? "/images/star3.jpg"
                      : restaurant.star === 2
                      ? "/images/star2.jpg"
                      : "/images/star1.jpg"
                  }
                  alt="star"
                  style={{
                    width:
                      restaurant.star === 3
                        ? "100%"
                        : restaurant.star === 2
                        ? "70%"
                        : "40%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid black",
            width: "800px",
            height: "600px",
            margin: "0 auto",
            boxShadow: "1px 1px 11px 1px rgba(90,90,90,1)",
            background: "white",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#74c0fc",
              fontSize: "1.2rem",
            }}
          >
            {restaurant.tag && func_tag(restaurant)}
          </div>
          <div style={{ display: "flex", marginTop: "12px" }}>
            <AiOutlinePhone
              style={{
                fontSize: "20px",
                marginRight: "12px",
                // marginTop: "4px",
              }}
              className="icon"
            />
            <div>
              {restaurant.DetailInfo && restaurant.DetailInfo.phonenumber}
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "12px" }}>
            <GoLocation
              style={{
                fontSize: "20px",
                marginRight: "12px",
                // marginTop: "4px",
              }}
              className="icon"
            />
            <div>{restaurant.DetailInfo && restaurant.DetailInfo.location}</div>
          </div>
          <div style={{ display: "flex", marginTop: "12px" }}>
            <MdAccessTime
              style={{ fontSize: "20px", marginRight: "12px" }}
              className="icon"
            />
            <span style={{ marginRight: "30px" }}>
              {restaurant.DetailInfo && restaurant.DetailInfo.weekday}
            </span>
            <span>
              {restaurant.DetailInfo && restaurant.DetailInfo.weekend}
            </span>
          </div>
          <div style={{ display: "flex", marginTop: "12px" }}>
            <MdDescription
              style={{ fontSize: "20px", marginRight: "12px" }}
              className="icon"
            />
            <div style={{ width: "700px" }}>
              {restaurant.DetailInfo && restaurant.DetailInfo.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailType;
