import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import { Grid, Link } from "@material-ui/core";
import useStyles from "../../utils/styles";

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>back to products</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
          <Grid item md={6}
      </Grid>
    </Layout>
  );
}
