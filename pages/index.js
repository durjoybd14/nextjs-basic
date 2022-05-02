import Head from "next/head";
import Products from "../components/Products/Products";

import styles from "../styles/Home.module.css";

export default function Home(props) {

  const products = props.products;
  return (
  <div>
{
  products.map(product=><Products key={product._id} product={product}></Products>)
}
  </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();

 

  return {
    props: { products: data }, // will be passed to the page component as props
  };
}
