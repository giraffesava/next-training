import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="next,javascript" />
        <meta name="description" content="training next" />
        <title>{title}</title>
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx global>
        {`
          nav {
            position: fixed;
            background: blue;
            height: 60px;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-around;
            text-decoration: none;
            align-items: center;
          }
          nav a {
            color: #fff;
            text-decoration: none;
            font-size: 35px;
          }
          main {
            padding-top: 60px;
          }
        `}
      </style>
    </>
  );
}
