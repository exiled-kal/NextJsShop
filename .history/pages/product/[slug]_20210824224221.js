import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import { Link } from "@material-ui/core";

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div>
        <NextLink>
          <Link>back to products</Link>
        </NextLink>
      </div>
    </Layout>
  );
}
