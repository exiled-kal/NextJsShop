import { Typography } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout title="Login">
      <form>
        <Typography component= variant="h1">Login</Typography>
      </form>
    </Layout>
  );
}