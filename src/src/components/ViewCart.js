import { func } from "prop-types";
import React, { usestate } from "react";
import Pdata from "../ecommerce.json";
import "../components/styles.css";

function Viewcart({ selItems }) {
  var cartData = [];
  selItems.map((ele) => {
    var temp = Pdata.map((x) => {
      if (ele == x.id) {
        cartData.push(x);
      }
    });
  });
  return (
    <div>
      {cartData.length > 0 ? (
        <div>
          {cartData.map((ele, index) => {
            return (
              <div key={index} className="Products">
                <div className="one-product">
                  <img src={ele.image_src} className="Products-image " />
                  <p>{ele.vendor}</p>
                  <p>{ele.name}</p>
                  <p>${ele.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <b>No items into the cart</b>
        </div>
      )}
    </div>
  );
}
export default Viewcart;
