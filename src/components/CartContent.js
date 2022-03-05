import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper className="section-center section">
      <CartColumns />
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <CartItem {...cartItem} />
          </div>
        );
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn" type="button">
          Continue Shopping
        </Link>
        <button className="link-btn clear-btn">Clear Shopping Cart</button>
      </div>
      <CartTotals />
      <Link to="/login" type="button" className="btn">
        Login
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartContent;