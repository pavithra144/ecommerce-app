import React, { useState, useEffect } from "react";
import ecommerce from "../ecommerce.json";
import logo from "../images/logo.svg";
import Login from "../pages/Login";
import Product from "../components/Product";
import ViewCart from "../components/ViewCart";
import Fuse from "fuse.js";

//Fontawesome icons
import {
  faSearch,
  faUser,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Products() {
  const [searchInput, setSearchInput] = useState("");
  const [changeLoginBehaviour, setChangeLoginBehaviour] = useState(false);
  const [login, setLogin] = useState(false);
  const [cart, setCart] = useState([]);
  //const [renderpage, setRenderPage] = useState(["products"]);
  //const [viewCart, setViewCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const elementSearch = <FontAwesomeIcon icon={faSearch} />;
  const elementUser = <FontAwesomeIcon icon={faUser} />;
  const elementCart = <FontAwesomeIcon icon={faCartArrowDown} />;

  //Searching / Filtering
  const fuse = new Fuse(ecommerce, {
    keys: ["name", "vendor", "tag"],
  });

  const results = fuse.search(searchInput);
  const ecommerceResults = searchInput
    ? results.map((result) => result.item)
    : ecommerce;
  const handleOnSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setSearchInput(value);
  };

  const addToCart = (product) => {
    console.log("we are n cart");
    setCart([...cart, product]);
  };

  const addCartItemsfromChild = (pId) => {
    var t1 = cartItems;
    t1.push(pId);
    setcartItems(t1);
  };
  const showCartState = () => {
    alert("in cart page");
    setShowCart(!showCart);
  };
  // const navigateTo = (nextPage) => {
  //   setRenderPage(nextPage);
  // };

  // const viewCartHandler = (product) => {
  //   console.log("viewing cart");
  //   setViewCart([...cart]);
  //   console.log(cart);
  // };
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
            onChange={handleOnSearch}
          />
          <React.Fragment>
            <a
              className="User-icon"
              onMouseEnter={() => setChangeLoginBehaviour(true)}
              //onMouseLeave={() => setChangeLoginBehaviour(false)}
            >
              {elementUser}
              {changeLoginBehaviour ? (
                <div>
                  <ul className="usericon-hover">
                    <li>
                      <button
                        className="login-button"
                        onClick={() => setLogin(true)}
                      >
                        Sign up/ Login
                      </button>
                    </li>
                    <li style={{ padding: "10px" }}>
                      <a onMouseEnter={() => setChangeLoginBehaviour(true)}>
                        Orders
                      </a>
                    </li>
                    <li>
                      <a>Coupons</a>
                    </li>
                    <li>
                      <a>Contact Us</a>
                    </li>
                  </ul>

                  {login ? <Login /> : null}
                </div>
              ) : null}
            </a>
          </React.Fragment>
          <a
            className="cart-font"
            onClick={showCartState}
            // onClick={() => viewCartHandler("product")}
          >
            {elementCart}
            <sup>{cart.length}</sup>
            {/* {renderpage === "products" && <Product />}
            {renderpage === "cart" && <ViewCart />} */}
          </a>
        </div>
      </div>
      {/* Products map  */}
      {showCart ? (
        <ViewCart selItems={cartItems} />
      ) : (
        <div>
          {ecommerceResults.map((product, index) => {
            debugger;
            return (
              <Product
                key={index}
                pId={product.id}
                vendor={product.vendor}
                name={product.name}
                isrc={product.image_src}
                size={product.options}
                rate={product.price}
                offer={product.compare_at_price}
                addToCartItems={addToCart}
                pMethod={addCartItemsfromChild}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
