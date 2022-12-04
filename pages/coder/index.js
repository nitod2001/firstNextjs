import React from "react";
import Head from "next/head";
import styles from "../../styles/coder.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { coders: data },
  };
};

export default function AllCoder({ coders }) {
  console.log(coders);
  return (
    <>
      <Head>
        <title> Coders | All Coders</title>
      </Head>
      <h1>All Coders</h1>
      {coders.map((coder, index) => (
        <Link key={index} href={"/coder/" + coder.id}>
          <div className={styles.single}>
            <h3>{coder.name}</h3>
          </div>
        </Link>
      ))}
    </>
  );
}
