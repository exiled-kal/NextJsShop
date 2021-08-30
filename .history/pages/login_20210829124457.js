import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
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
            <TextField variant="outlined" fullWidth id="email" label="Email">
              Email:
            </TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
            >
              Password:
            </TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
              Don't have an account
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
