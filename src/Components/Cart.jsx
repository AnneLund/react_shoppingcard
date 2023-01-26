import React from "react";
import styled from "styled-components";
import { useShoppingCardStore } from "./useShoppingCard";

const Cart = styled.figure`
  align-items: center;
  background-color: #aaaa;
  margin: 0.5em;
  padding: 1em;
  position: absolute;
  top: 0;
  right: 0;
  figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0.2em 0;
    text-align: left;
  }

  span {
    background-color: #ffffff;
    margin: 0.5em;
    padding: 0.5em;
  }
`;

const ShoppingCart = () => {
  const { cartItems, setDeleteItem, setEmptyCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCardStore();

  return (
    <Cart>
      <h2>Indkøbskurv</h2>
      <figcaption>
        {cartItems.map((item, i) => (
          <>
            <p key={i}>
              {item.title} <span>Antal: {item.amount}</span>
            </p>
            <div>
              <button onClick={() => increaseCartQuantity(item.id, item.price, 1, item.title)}>Tilføj</button>
              <button
                onClick={() => {
                  if (item.amount > 1) {
                    decreaseCartQuantity(item.id, item.price, 1);
                  } else {
                    setDeleteItem(item.id);
                  }
                }}>
                Fjern
              </button>
              <button onClick={() => setDeleteItem(item.id)}>Slet vare</button>
            </div>
          </>
        ))}
      </figcaption>

      <>{cartItems > [1] ? <button onClick={() => setEmptyCart()}>Tøm kurven</button> : null}</>
    </Cart>
  );
};

export default ShoppingCart;
