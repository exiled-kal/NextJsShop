import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My Cake Shop</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Cake Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
<Typogrpahy>
    All 
</Typogrpahy>
      </footer>
    </div>
  );
}

export default Layout;
