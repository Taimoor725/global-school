import NavBar from "@/components/common/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NavBar/>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
