import React, { useContext } from "react";
import { Store } from "../utils/Store";
import Layout from "../components/Layout"
import { Typography } from "@material-ui/core";

export default function CartScreen() {
    const {state} = useContext(Store);
    const {cartItems} = state;
    
  return <Layout title="Shopping cart">
  <Typography></Typography>

  </Layout>;
}
