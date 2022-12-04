import Head from "next/head";
import React from "react";

//Truyen cho NextJs biet co bao nhieu path duong dan
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // map data  to an array of path obj with params (id)
  const paths = data.map((coder) => {
    return {
      params: { id: coder.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

//context chua id trong [id].js
export const getStaticProps = async (context) => {
  const id = context.params.id; // getId from Dynamic Route

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { coder: data },
  };
};

export default function Detail({ coder }) {
  console.log(coder);
  return (
    <>
      <Head>
        <title>Coder | {coder.name}</title>
        <meta name="keywords" content="coders"></meta>
      </Head>
      <div>
        <h1>{coder.name}</h1>
        <p>Email : {coder.email}</p>
        <p>Website : {coder.website}</p>
        <p>
          Address : {coder.address.street}, {coder.address.city}
        </p>
        <p>Company : {coder.company.name}</p>
      </div>
    </>
  );
}
