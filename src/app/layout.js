import Head from "next/head";

import "../styles/normalize.css";
import "../styles/component.css";
import "../styles/globals.css";

export const metadata = {
  title: "DELATTIO - LUXURY VILLA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/assets/intro.mp4" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
