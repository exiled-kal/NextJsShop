import React, { useContext } from "react";
import { Store } from "../utils/Store";

export default function CartScreen() {
    const {state} = useContext(Store);
    const {cartItems} = state;
    
  return <div>Cart screen</div>;
}
