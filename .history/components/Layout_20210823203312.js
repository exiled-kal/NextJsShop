import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";

function Layout() {
  return (
    <div>
      <Head>
        <title>My Cake Shop</title>
      </Head>
      <AppBar position="static" >
          <Toolbar>
              <Typography>
                  Cake Shop</>
              </Typography>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default Layout;
