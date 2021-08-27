import React, { useContext } from "react";
import { Store } from "../utils/Store";

export default function CartScreen() {
    const {state} = useContext(Store)
    
  return <div>Cart screen</div>;
}
