import React from "react";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500">
        <Navbar />
        <div className="borda border-b flex items-center justify-center h-full w-full"></div>
        <div className="flex justify-center text-center">
          <h1 className=" whitespace-normal text-3xl p-5 text-white">Meu nome é Carlos Eduardo, estudo ciência da computação na
            UNIPÊ em João Pessoa e sou um desenvolvedor front-end, tenho experiência com TypeScript e seu framework Next.Js, possuo
            alguns <Link href="../Projetos" className="underline decoration-indigo-500">projetos</Link> para demonstrar meus conhecimentos
            na área. Tenho a vontade de trabalhar como desenvolvedor mobile mas por enquanto sigo no web.</h1>
        </div>
      </main>
    </>
  );
}
