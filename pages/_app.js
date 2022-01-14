import "../styles/main.scss";
import NextNprogress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="darkcyan"
        startPosition={0.3}
        stopDelayMs={200}
        height={8}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}
