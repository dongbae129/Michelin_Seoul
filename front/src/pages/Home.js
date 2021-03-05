import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SEARCH_TARGETS_REQUEST } from "../reducers/restaurant";
import { BsSearch } from "react-icons/bs";
import "../css/home.css";
import HomeBoard from "./HomeBoard";

// const images = ["korean", "spanish", "sushi", "innovative", "contemporary"];
const foodType = ["korea", "spanish", "sushi", "innovative", "contemporary"];
// const HomeRending = (num) => {
//   let a = [];
//   Array(num)
//     .fill(1)
//     .map((v, i) => {
//       if (num === 3) {
//         a.push(
//           <Link key={i + 3} to={`/restaurant?type=${foodType[i]}`}>
//             <img
//               style={{
//                 width: "200px",
//                 height: "150px",
//                 margin: "10px",
//                 borderRadius: "3%",
//                 boxShadow: "2px 2px 11px 1px rgba(110,89,101,1)",
//               }}
//               key={i + 3}
//               alt="img"
//               src={`/images/${images[i]}.jpg`}
//             />
//           </Link>
//         );
//         return a;
//       }
//       a.push(
//         <Link key={i} to={`/restaurant?type=${foodType[i + 3]}`}>
//           {" "}
//           <img
//             style={{
//               width: "200px",
//               height: "150px",
//               margin: "10px",
//               borderRadius: "3%",
//               boxShadow: "2px 2px 11px 1px rgba(110,89,101,0.5)",
//             }}
//             key={i}
//             alt="img"
//             src={`/images/${images[i + 3]}.jpg`}
//           />
//         </Link>
//       );
//     });
//   return a;
// };
const typeRending = () => {};
function Home() {
  const [search, setSearch] = useState("");
  const searchInput = useRef();
  const cargoText = useRef([
    "korea",
    "spanish",
    "sushi",
    `innova\ntive`,
    "contem\nporary",
  ]);
  const dispatch = useDispatch();
  const onSetSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSubmitSearch = (e) => {
    // e.preventDefault();
    if (e.keyCode === 13) {
      if (search === "") return searchInput;
      // dispatch({
      //   type: SEARCH_TARGETS_REQUEST,
      //   data: search,
      // });
      searchInput.current.click();
    }
  };

  return (
    <div className="rootTest">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          marginTop: 0,
          paddingTop: "20px",
          position: "relative",
        }}
      >
        <input
          type="text"
          className="mainInput"
          onKeyDown={onSubmitSearch}
          value={search}
          onChange={onSetSearch}
          placeholder="검색"
          style={{
            // display: "block",
            width: "500px",
            height: "35px",
            border: "2px solid #a5d8ff",
            fontSize: "1.3rem",
            textAlign: "center",
            borderRadius: "10px",
          }}
        />
        {/* <div style={{ height: "35px" }}> */}
        <Link to={`/restaurant/search?type=${search}`}>
          <div
            ref={searchInput}
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              left: "-30px",
              zIndex: "10",
              height: "35px",
              fontSize: "24px",
              color: "#ffc078",
            }}
          >
            <BsSearch />
          </div>
        </Link>
        {/* </div> */}
      </div>

      <div>
        <div
          onClick={typeRending}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="leftside">
            {/* <img src="/images/dishforknife.png" alt="" /> */}
          </div>
          {/* <HomeBoard imgArr={images} foodtype={foodType} /> */}
          {/* {HomeRending(3)} */}
        </div>
        {/* <div
          onClick={typeRending}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {HomeRending(2)}
        </div> */}
      </div>
      {/* <div className="imgtest">
        {Array(5)
          .fill(0)
          .map((v, i) => (
            <img
              key={i}
              src={`/images/cloud${i + 1}.png`}
              alt=""
              style={{ "--i": i + 1 }}
            />
          ))}
      </div> */}

      {/* <div className="rightside"></div> */}
      <section>
        <div className="snow1"></div>
        <div className="snow2"></div>
        <div className="snow3"></div>
      </section>
      <div>
        <div className="trainrail">
          <img src="/images/trainrail.png" alt="" />
        </div>
        <div className="train">
          <img src="/images/finaltrain.png" alt="" />
          <img src="/images/traincloud.png" alt="" />
          <div className="cargowrap">
            {cargoText.current.map((v, i) => {
              return (
                <Link key={v} to={`/restaurant?type=${foodType[i]}`}>
                  <div key={v} className="cargo" style={{ "--i": i + 1 }}>
                    <div>
                      {v.split("\n").map((text) => (
                        <div key={text}>
                          {text}
                          <br />
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
