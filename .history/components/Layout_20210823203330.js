import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";

function Layout() {
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
      <Container>
          
      </Container>
    </div>
  );
}

export default Layout;
