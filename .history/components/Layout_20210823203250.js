import { AppBar } from "@material-ui/core";
import Head from "next/head";
import React from "react";

function Layout() {
  return (
    <div>
      <Head>
        <title>My Cake Shop</title>
      </Head>
      <AppBar position="static" >
          <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
}

export default Layout;
