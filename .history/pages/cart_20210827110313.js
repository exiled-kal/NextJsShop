import React, { useContext } from "react";
import { Store } from "../utils/Store";
import Layout from "../components/Layout";
import { Typography } from "@material-ui/core";

export default function CartScreen() {
  const { state } = useContext(Store);
  const { cartItems } = state;

  return (
    <Layout title="Shopping cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
          <div>
              Cart is empty. <NextLink href="/">Go Shopping</NextLink>
          </div>):(
              <Grid>
                  <Grid></Grid>
                  <Grid></Grid>
              </Grid>
              
              
          )}
    </Layout>
  );
}
