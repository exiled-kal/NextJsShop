import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title>

    </Layout>
    
    
  );
}
