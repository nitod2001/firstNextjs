import Head from "next/head";
import Image from "next/image";
import Navbar from "../component/Navbar";
import MainHome from "../component/Home";
import Tech from "../component/Tech";
import Team from "../component/Team";
import Tool from "../component/Tool";
import Client from "../component/Client";
import Post from "../component/Post";

export default function Home() {
  return (
    <>
      <MainHome></MainHome>
      <Tech></Tech>
      <Team></Team>
      <Tool></Tool>
      <Client></Client>
      <Post></Post>
    </>
  );
}
