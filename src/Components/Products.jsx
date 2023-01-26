import React from "react";
import styled from "styled-components";
import { useShoppingCardStore } from "../Components/useShoppingCard";
import useGetListItemsByEndPoint from "../Hooks/useGetListItemsByEndPoint";

const ProductList = styled.ul`
  width: 50%;
  margin: 0 auto;
  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffff99;
    margin: 0.5em;
    padding: 0 1em;
    button {
      margin: 0 0.5em;
    }
  }
`;

const Products = () => {
  const { state } = useGetListItemsByEndPoint("products", "items");
  const { cartItems, setDeleteItem, setEmptyCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCardStore();

  const returnAmount = (id) => {
    const itemAmount = cartItems.find((ci) => ci.id === id)?.amount;
    return itemAmount;
  };
  return (
    <ProductList>
      {state.map((item, i) => (
        <>
          <li key={i}>
            <p>{item.title}</p>
            <span>
              <button onClick={() => increaseCartQuantity(item.id, item.price, 1, item.title)}>Tilføj</button>
              <span>Antal: {returnAmount(item.id)}</span>
            </span>
          </li>
        </>
      ))}
    </ProductList>
  );
};

export default Products;
