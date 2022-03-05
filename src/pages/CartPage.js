import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import cart_reducer from "../reducers/cart_reducer";

const CartPage = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper className="page-100 page">
      {cart.length <= 0 ? (
        <div className="empty">
          <h2>Your Cart is empty</h2>
          <Link to="/products" type="button" className="btn">
            fill it
          </Link>
        </div>
      ) : (
        <div>
          <PageHero title="Cart" />
          <CartContent />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
