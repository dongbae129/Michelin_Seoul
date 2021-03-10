import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "../css/home.css";

const foodType = ["korea", "spanish", "sushi", "innovative", "contemporary"];

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
  const onSetSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSubmitSearch = (e) => {
    if (e.keyCode === 13) {
      if (search === "") return searchInput;

      searchInput.current.click();
    }
  };

  return (
    <div className="rootTest">
      <div>
        <input
          type="text"
          className="mainInput"
          onKeyDown={onSubmitSearch}
          value={search}
          onChange={onSetSearch}
          placeholder="검색"
        />
        <Link to={`/restaurant/search?type=${search}`}>
          <div className="searchimg" ref={searchInput}>
            <BsSearch />
          </div>
        </Link>
      </div>

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
