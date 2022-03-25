import React, { useEffect } from "react";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
import { GET_DETAIL_INFO_REQUEST } from "../reducers/restaurant";

import { AiOutlinePhone } from "react-icons/ai";
import { MdAccessTime, MdDescription } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import ImageSlide from "./ImageSlide";
import { func_tag } from "./ShowingRestaurant";
import "../css/detailtype.css";
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
      <div className="detailWrap"></div>
      <div>
        <div className="detail-header">
          <div>
            <div>
              <strong>{restaurant && restaurant.name}</strong>
              <span className="rescountry">
                {restaurant && restaurant.foodtype}
              </span>
            </div>
            <div>
              <div>
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
        <div className="detail-main">
          <div>{restaurant.tag && func_tag(restaurant)}</div>
          <div className="detail_main-info">
            <AiOutlinePhone
              style={{
                fontSize: "20px",
                marginRight: "12px",
              }}
              className="icon"
            />
            <div>
              {restaurant.DetailInfo && restaurant.DetailInfo.phonenumber}
            </div>
          </div>
          <div className="detail_main-info">
            <GoLocation
              style={{
                fontSize: "20px",
                marginRight: "12px",
              }}
              className="icon"
            />
            <div>{restaurant.DetailInfo && restaurant.DetailInfo.location}</div>
          </div>
          <div className="detail_main-info">
            <MdAccessTime
              style={{ fontSize: "20px", marginRight: "12px" }}
              className="icon"
            />
            <span className="detail_main-info-weekday">
              {restaurant.DetailInfo && restaurant.DetailInfo.weekday}
            </span>
            <span>
              {restaurant.DetailInfo && restaurant.DetailInfo.weekend}
            </span>
          </div>
          <div className="detail_main-info">
            <MdDescription
              style={{ fontSize: "20px", marginRight: "12px" }}
              className="icon"
            />
            <div className="detail_main-info-desc">
              {restaurant.DetailInfo && restaurant.DetailInfo.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailType;
