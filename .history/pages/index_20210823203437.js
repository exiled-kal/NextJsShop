import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
      </div>
      <div>
        <ul>
      </div>
        <div>
          <li>Product 1</li>
        </div>
        <div>
          <li>Product 2</li>
        </div>
        <div>
          <li>Product 3</li>
        </div>
      <div></ul></div>
    </Layout>
  );
}
