import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../Components/Button";
import MyInput from "../Components/MyInput";
import Users from "../Components/Users";

function Home() {
  return (
    <div>
      <Button />
      <MyInput />
      <Users />
    </div>
  );
}

export default Home;
