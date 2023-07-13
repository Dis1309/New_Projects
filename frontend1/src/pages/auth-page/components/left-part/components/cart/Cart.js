import React from "react";
import PhonePrice from "../../../../../../layout/phone-price/PhonePrice";
import "./Cart.css";

const Cart = ({ cartArray, currentState }) => {
  console.log(cartArray);
  return (
    <div className="cartWrapper">
      <h4>Your cart</h4>
      <p>Get your exclusive web3 phone number now</p>

      <div className="cartWrapperColumn">
        {cartArray.map((num, i) => (
          <PhonePrice number={`${num}`} tier={"diamond"} price={"5.00"} key={i} />
        ))}
      </div>

      <div className="cartWrapperTotalCount">
        <div className="cartWrapperSubtotal">Subtotal</div>
        <div className="cartWrapperPrice">{`$${cartArray.length*5}`}</div>
      </div>

      <div className="cartWrapperTotalCount">
        <div className="cartWrapperTotal">Total</div>
        <div className="cartWrapperPrice">{`$${cartArray.length*5}`}</div>
      </div>

      {currentState == 'claimOrder' && <div className="cartWrapperCoupon">
        Apply coupon
        <form className="cartWrapperCouponForm">
          <input placeholder="Enter coupon code" />
          <button>Enter</button>
        </form>
      </div>}
    </div>
  );
};

export default Cart;
