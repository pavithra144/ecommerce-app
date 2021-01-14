import React, { useState } from "react";
import ecommerce from "../ecommerce.json";
import "../components/styles.css";

//Product map on hover
export default function Product({
  key,
  pId,
  vendor,
  name,
  isrc,
  size,
  rate,
  offer,
  addToCartItems,
  pMethod,
}) {
  const handleCart = (ecommerce, pId) => {
    addToCartItems(ecommerce);
    pMethod(pId);
  };

  return (
    <div>
      <div key={key} className="Products">
        <div className="one-product">
          <img src={isrc} className="Products-image " />
          <div className="child">
            Sizes:{" "}
            {size.map((item, idx) => {
              return (
                <div
                  style={{
                    color: "black",
                    backgroundColor: "white",
                  }}
                >
                  <div className="size-style" key={idx}>
                    {item.value + ","}
                  </div>
                </div>
              );
            })}
            <div className="cart-button">
              <button onClick={() => handleCart(ecommerce, pId)}>
                ADD TO CART
              </button>
            </div>
          </div>
          <h1>{vendor}</h1>
          <p>{name}</p>
          <div>
            <span>${rate}</span>
            <span>
              <strike>${offer}</strike>
            </span>
            <span>(40% offer)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
