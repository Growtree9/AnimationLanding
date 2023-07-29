import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import "../styles/normalize.css";
import "../styles/demo.css";
import "../styles/component.css";
import "../styles/globals.css";

export const metadata = {
  title: "DELATTIO - LUXURY VILLA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
