import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Restaurant from "./pages/Restaurant";
import aa from "./pages/aa";
import DetailType from "./components/DetailType";
import "./css/app.css";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "9vh",
          padding: "10px",
        }}
      >
        <div style={{ width: "50px", height: "50px", zIndex: "1" }}>
          <Link
            to="/"
            style={{
              marginLeft: "10px",
            }}
          >
            <img
              src="/images/mainlogo.png"
              alt="logo"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </Link>
        </div>
        <div
          style={{
            marginLeft: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            padding: "10px",
            borderRadius: "10px",
            background: "#e3fafc",
            zIndex: "1",
          }}
        >
          {" "}
          <Link
            style={{
              textDecoration: "none",
              color: "#495057",
              fontSize: "30px",
              verticalAlign: "middle",
              fontFamily: "'Nanum Pen Script', cursive",
            }}
            to="/upload"
          >
            Upload
          </Link>
        </div>
      </div>

      <Route path="/" component={Home} exact />
      <Route path="/upload" component={Upload} />
      <Switch>
        <Route path="/restaurant/detailinfo" component={DetailType} />
        <Route path="/restaurant/search" component={aa} />
        <Route path="/restaurant" component={Restaurant} />
      </Switch>
      <Route path="/food/:type" component={DetailType} />
    </BrowserRouter>
  );
}

export default App;
