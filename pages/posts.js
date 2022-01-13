import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MainLayout } from "../layouts/MainLayout";

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    }
    if (!serverPosts) {
      loadPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <Head>
        <title>Posts page</title>
      </Head>
      <h1>Posts page</h1>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return {
      posts: null,
    };
  }
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();
  return {
    posts,
  };
};
