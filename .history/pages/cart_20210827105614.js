import React, { useContext } from "react";
import { Store } from "../utils/Store";
import Layout from "../compone"

export default function CartScreen() {
    const {state} = useContext(Store);
    const {cartItems} = state;
    
  return <Layout>Cart screen</Layout>;
}
