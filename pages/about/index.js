import Router from "next/router";
import { MainLayout } from "../../layouts/MainLayout";

export default function About({ title }) {
  return (
    <MainLayout title="Next">
      <h1>{title}</h1>
      <h1>About page</h1>
      <button onClick={() => Router.push("/")}>Go back to home</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");

  const data = await response.json();
  return {
    title: data.title,
  };
};
