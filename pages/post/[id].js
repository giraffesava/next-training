import { useRouter } from "next/router";
import { MainLayout } from "../../layouts/MainLayout";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Post({ post: serverPost }) {
  const { query } = useRouter();
  const [post, setPost] = useState(serverPost);
  useEffect(() => {
    async function loadPost() {
      const response = await fetch(`http://localhost:4200/posts/${query.id}`);
      const data = await response.json();
      setPost(data);
    }
    if (!serverPost) {
      loadPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>Post {query.id}</h1>
      <h1>{post.body}</h1>
      <Link href="/posts">
        <a>Go Back</a>
      </Link>
    </MainLayout>
  );
}

// works on backend and frontend, that's why can check ctx.req
Post.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return {
      post: null,
    };
  }
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();
  return {
    post,
  };
};

// works only on server
// export async function getServerSideProps({ query, req }) {
//   // if (!req) { - can't check it cause doesn't work on frontend
//   //   return {
//   //     post: null,
//   //   };
//   // }
//   const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
//   const post = await response.json();
//   return {
//     props: { post },
//   };
// }
