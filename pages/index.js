import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../component/navbar/navbar";
import SeconNavBar from "../component/SecondNavBar/SecondNavBar"; 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SeconNavBar />
    </div>
  );
}
