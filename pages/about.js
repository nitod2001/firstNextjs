import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title> Coders | About</title>
      </Head>
      <h1 className={styles.title}>About page</h1>
      <p className={styles.text}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
      <p className={styles.text}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
      <Link href="/coder">
        <div className={styles.btn}>See All Coders</div>
      </Link>
    </>
  );
}
