import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import Head from "next/head";
import React from "react";
import NextLink from "next/link";
import useStyles from "../utils/styles";

function Layout({ title, children, description }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: '1rem '
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - My Cake Shop` : "My Cake Shop"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Cake Shop</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
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
      </ThemeProvider>
    </div>
  );
}

export default Layout;
