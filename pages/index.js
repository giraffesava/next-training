import Link from "next/link";
import { MainLayout } from "../layouts/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <h1>Hola</h1>
      <p>
        <Link href="/posts">Posts</Link>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
    </MainLayout>
  );
}
