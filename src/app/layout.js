"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import StoreProvider from "./StoreProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav-icon.png" />
      </head>
      <body className={roboto.className}>
        <StoreProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
