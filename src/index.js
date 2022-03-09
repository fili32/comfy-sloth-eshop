import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// Domain: dev-f27z5j5k.eu.auth0.com
// Client id: ulWeEELqsOPQvuUR6tEoCDJWDBHcj3x6

ReactDOM.render(
  <Auth0Provider
    domain="dev-f27z5j5k.eu.auth0.com"
    clientId="ulWeEELqsOPQvuUR6tEoCDJWDBHcj3x6"
    redirectUri={window.location.origin}
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
