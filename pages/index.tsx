import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import DizzyPlate from "../public/dizzy-plate-with-vegetables.png";

const inter = Inter({ subsets: ["latin"] });

/**
 * The Home page component.
 * Displays the landing page with a hero image ("Dizzy Plate") and a call to action
 * to get started, which leads to the login page.
 *
 * @returns {JSX.Element} The rendered Home page.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black grid grid-rows-2 h-screen">
        <div className="relative">
          <Image
            src={DizzyPlate}
            alt="Dizzy Plate"
            className="w-4/5 h-auto absolute -bottom-4 left-1/2 -translate-x-1/2"
            priority={true}
          ></Image>
        </div>
        <div className="bg-white rounded-3xl px-8 py-20">
          <h1 className="font-extrabold text-black text-4xl">
            Your Best Food Tracker Ever!
          </h1>
          <p className="font-extralight text-black text-xl mt-5 mr-10">
            Tell us your food preferences and we&apos;ll only serve you
            delicious recipes ideas
          </p>
          <Link
            href={"/login"}
            className="block w-full py-5 text-2xl bg-blue-600 mt-5 mr-10 rounded-2xl text-center"
          >
            Get Started
          </Link>
        </div>
      </main>
    </>
  );
}
