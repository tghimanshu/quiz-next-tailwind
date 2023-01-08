import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="bg-black grid grid-rows-1/9 h-screen">
      <div className="relative"></div>
      <div className="bg-white rounded-3xl px-8 py-20">
        <h1 className="font-extrabold text-black text-4xl">
          Your Best Food Tracker Ever!
        </h1>
        <p className="font-extralight text-black text-xl mt-5 mr-10">
          Tell us your food preferences and we&apos;ll only serve you delicious
          recipes ideas
        </p>
        <Link
          href={"/login"}
          className="block w-full py-5 text-2xl bg-blue-600 mt-5 mr-10 rounded-2xl text-center"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
};

export default Login;
