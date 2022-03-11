import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const CheckoutPage = () => {
  const { total_amount, cart } = useCartContext();
  const { myUser } = useUserContext();

  return (
    <main>
      <PageHero title="checkout" />
      {cart.length > 0 ? (
        <Wrapper className="page-100 text-center">
          <h4>hello, {myUser.name}</h4>
          <p>Your total is {formatPrice(total_amount)}</p>
          <p>Test Card Number: 4242 4242 4242 4242</p>
          <StripeCheckout />
        </Wrapper>
      ) : (
        <Wrapper className="page-100 empty text-center">
          <h2>Your Cart is empty</h2>
          <Link type="button" className="btn" to="/products">
            fill it
          </Link>
        </Wrapper>
      )}
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
