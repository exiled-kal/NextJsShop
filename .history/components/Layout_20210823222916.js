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

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>My Cake Shop</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Cake Shop</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
              <NextLink href=''
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

export default Layout;
