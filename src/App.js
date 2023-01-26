import "./App.css";
import { useShoppingCardStore } from "./Components/useShoppingCard";
import useGetListItemsByEndPoint from "./Hooks/useGetListItemsByEndPoint";
import styled from "styled-components";
import ShoppingCart from "./Components/Cart";
import Products from "./Components/Products";

const ShoppingPage = styled.section`
  text-align: center;
  position: relative;
`;

function App() {
  const { state } = useGetListItemsByEndPoint("products", "items");
  const { cartItems, setDeleteItem, setEmptyCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCardStore();

  const returnAmount = (id) => {
    const itemAmount = cartItems.find((ci) => ci.id === id)?.amount;
    return itemAmount;
  };

  console.log(cartItems);

  return (
    <ShoppingPage>
      <h1>Shopping med Zustand</h1>
      <Products />
      {cartItems ? <ShoppingCart /> : null}
    </ShoppingPage>
  );
}

export default App;
