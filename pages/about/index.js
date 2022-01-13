import Router from "next/router";
import Head from "next/head";
import { MainLayout } from "../../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout title="Next">
      <h1>About page</h1>
      <button onClick={() => Router.push("/")}>Go back to home</button>
    </MainLayout>
  );
}
