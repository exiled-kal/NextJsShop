import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import React from "react";
import NextLink from "next/link";
import useStyles from "../utils/styles";

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>My Cake Shop</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Link href="/">
            <Typography className={classes.brand}>Cake Shop</Typography>
          </Link>

          <div className={classes.grow}></div>
          <div>
            
              <Link href="/cart">Cart</Link>
            
            <NextLink  passHref>
              <Link >Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography className={classes.footer}>
          All rights reserved. Cake Shop{" "}
        </Typography>
      </footer>
    </div>
  );
}
