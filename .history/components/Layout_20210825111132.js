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
  const theme = createTheme({});
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - My Cake Shop` : "My Cake Shop"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      
      
      
      
      
      
      
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
    </div>
  );
}

export default Layout;
