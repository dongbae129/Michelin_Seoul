import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../css/main.css";

function getTarget(elem, className) {
  while (!elem.classList.contains(className)) {
    elem = elem.parentNode;

    if (elem.nodeName === "BODY") {
      elem = null;
      return;
    }
  }
  return elem;
}

const HomeBoard = ({ imgArr, foodtype }) => {
  const [mainState, setMainState] = useState(false);
  const [hiddensapn, setHidden] = useState(false);
  const tpyeArr = ["Korean", "Spanish", "Sushi", "Contemporary", "Innovative"];
  const onClickPage = (e) => {
    let pageElem = getTarget(e.target, "page");
    if (pageElem) {
      pageElem.classList.add("page-flipped");
      setMainState(true);
      setTimeout(() => {
        setHidden(true);
      }, 300);
    }
  };

  return (
    <>
      <div className={mainState ? "mainwrap flipped" : "mainwrap"}>
        <div className="page" onClick={onClickPage}>
          <div className="page-face">
            <img src="/images/velvet.jpg" alt="" />
            <div className="imgtest"></div>
            {/* <div className="testhome">
              {tpyeArr.map((v, i) => (
                <div className="tiltwrap" key={v}>
                  <Link to={`/restaurant?type=${foodtype[i]}`}>
                    <Tilt
                      className="Tilt"
                      options={{ max: 25 }}
                      style={
                        i === 4
                          ? { bordern: "none" }
                          : { borderBottom: "1px solid black" }
                      }
                    >
                      <div className="typewrap">
                        <div className="testtype">
                          <span>{v}</span>
                          <span>5개</span>
                        </div>
                      </div>
                    </Tilt>
                  </Link>
                </div>
              ))}             
            </div> */}
            <span className={hiddensapn ? "menuboard hidden" : "menuboard"}>
              Menu
            </span>
            {/* <span className={hiddensapn ? "menuclick hidden" : "menuclick"}>
              Click
            </span> */}
          </div>
          <div className="page-face back ">
            {Array(3)
              .fill(0)
              .map((v, i) => (
                <div className="back-face" key={i}>
                  <div>
                    <Link to={`/restaurant?type=${foodtype[i]}`}>
                      <img src={`/images/${imgArr[i]}.jpg`} alt="" />
                    </Link>
                  </div>
                  <div className="back-face_count">
                    <span>5개</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="page">
          <div className="page-face back ">
            {Array(2)
              .fill(0)
              .map((v, i) => (
                <div className="back-face" key={i + 3}>
                  <div>
                    <Link to={`/restaurant?type=${foodtype[i + 3]}`}>
                      <img src={`/images/${imgArr[i + 3]}.jpg`} alt="" />
                    </Link>
                  </div>
                  <div className="back-face_count">
                    <span>5개</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="ripple">
          <div className="ripple_box">
            {Array(5)
              .fill(0)
              .map((v, i) => (
                <span style={{ "--i": i + 1 }}></span>
              ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomeBoard;
