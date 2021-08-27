import React, { useContext } from "react";
import { Store } from "../utils/Store";
import Lay

export default function CartScreen() {
    const {state} = useContext(Store);
    const {cartItems} = state;
    
  return <Layout>Cart screen</Layout>;
}
