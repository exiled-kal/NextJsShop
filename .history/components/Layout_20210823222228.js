import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import NextLink from 
import useStyles from "../utils/styles";

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>My Cake Shop</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Cake Shop</Typography>
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

export default Layout;
