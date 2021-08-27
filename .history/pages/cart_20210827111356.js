import React, { useContext } from "react";
import { Store } from "../utils/Store";
import Layout from "../components/Layout";
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableCell,
} from "@material-ui/core";
import NextLink from "next/link";

export default function CartScreen() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <Layout title="Shopping cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <NextLink href="/">Go Shopping</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            cart actions
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}
