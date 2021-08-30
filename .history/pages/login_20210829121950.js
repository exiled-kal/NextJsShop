import { List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout title="Login">
      <form>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField></TextField>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
