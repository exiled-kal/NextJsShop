import { List, ListItem, TextField, Typography } from "@material-ui/core";
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
            <TextField>Email:</TextField>
          </ListItem>
          <ListItem>
            <TextField>Password:</TextField>
          </ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </List>
      </form>
    </Layout>
  );
}
