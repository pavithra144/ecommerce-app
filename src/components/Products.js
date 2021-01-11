import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ecommerce from "../ecommerce.json";
import logo from "../images/logo.svg";
import Login from "../pages/Login";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import {
  faSearch,
  faUser,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Products() {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState();
  const [changeBehaviour, setChangeBehaviour] = useState(false);
  const [changeLoginBehaviour, setChangeLoginBehaviour] = useState(false);
  const [login, setLogin] = useState(false);
  const [cart, setCartHandler] = useState("");

  useEffect(() => {});

  const elementSearch = <FontAwesomeIcon icon={faSearch} />;
  const elementUser = <FontAwesomeIcon icon={faUser} />;
  const elementCart = <FontAwesomeIcon icon={faCartArrowDown} />;

  const showVal = (e) => {
    // e.target.style;
    setChangeBehaviour(true);
  };

  const hideVal = (e) => {
    // e.target.style;
    setChangeBehaviour(false);
  };

  return (
    <>
      {/* Header */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexFlow: "column",
          position: "fixed",
          zIndex: "7",
          width: "2000px",
          height: "70px",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ display: "inline-block" }}>
          <img style={{ marginTop: "20px" }} src={logo} />
          <p style={{ display: "inline-block", marginLeft: "5%" }}>Shop</p>
          <label style={{ display: "inline-block", marginLeft: "2%" }}>
            Our Stores
          </label>

          <p style={{ display: "inline-block", marginLeft: "2%" }}>About Us</p>
          <p style={{ display: "inline-block", marginLeft: "2%" }}>
            Contact Us
          </p>
          <p style={{ display: "inline-block", marginLeft: "2%" }}>
            {" "}
            {elementSearch}
          </p>
          <input
            type="text"
            className="search-input"
            value={searchInput}
            placeholder="Search..."
            onChange={({ target }) => setSearchInput(target.value)}
          />
          <React.Fragment>
            <a
              className="User-icon"
              onMouseEnter={() => setChangeLoginBehaviour(true)}
            >
              {elementUser}
              {changeLoginBehaviour ? (
                <span>
                  <button
                    className="login-button"
                    onClick={() => setLogin(true) && history.push(ROUTES.HOME)}
                    exact
                    path={ROUTES.LOG_IN}
                    to={ROUTES.LOG_IN}
                    //onMouseLeave={() => setChangeLoginBehaviour(false)}
                  >
                    Sign up/ Login
                  </button>
                  <a onMouseEnter={() => setChangeLoginBehaviour(true)}>
                    Orders
                  </a>
                  {login ? <Login /> : null}
                </span>
              ) : null}
            </a>
          </React.Fragment>
          <a className="cart-font">
            {elementCart}
            <sup>2</sup>
          </a>
        </div>
      </div>

      {/* Products */}
      <div to="/home">
        {ecommerce.map((product) => {
          return (
            <div key={product.id} className="Products">
              <div className="one-product">
                <img
                  src={product.image_src}
                  className="Products-image "
                  // onMouseEnter={() => setChangeBehaviour(true)}
                  onMouseEnter={showVal}
                />
                {changeBehaviour ? (
                  <p
                    onmouseleave={() => setChangeBehaviour(false)}
                    className="cart-style"
                  >
                    <button>ADD TO CART</button>
                    <p key={product.options.id}>
                      Sizes:
                      {product.options.map((data) => {
                        return data.value + ",";
                      })}
                    </p>
                  </p>
                ) : null}

                <div key={product.options.id}>
                  <h1 className="product-vendor">{product.vendor}</h1>
                  <p className="product-name">{product.name}</p>
                  <div className="Product-offer">
                    <span className="product-price">${product.price}</span>
                    <span>
                      <strike>${product.compare_at_price}</strike>
                    </span>
                    <span>(40% off)</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
