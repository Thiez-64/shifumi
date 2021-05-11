import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../Components/Button";

function Home() {
  const input = "START";
  return (
    <div>
      <Button input={input} />
    </div>
  );
}

export default Home;
