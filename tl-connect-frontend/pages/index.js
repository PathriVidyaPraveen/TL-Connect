import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>TL Connect - Home</title>
        <meta name="description" content="Tinkerers' Lab Management Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to TL Connect</h1>
        <p>This is the internal management portal of Tinkerers' Lab, IITH.</p>
        <Link href="/login">
        <button>Go to Login</button>
      </Link>
      </main>
      <Footer />
    </>
  );
}
