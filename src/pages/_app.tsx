import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-light-gray max-w-screen-2xl mx-auto ${inter.className}`}>
      <Header />
      <section className="">
        <Component {...pageProps} />
      </section>
      <Footer />
    </main>
  );
}
