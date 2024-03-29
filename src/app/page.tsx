'use client'

import React from "react";
import Navbar from "./components/navbar";
import { motion } from "framer-motion";



export default function Home() {


  return (

    <>

      <main className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500">

        <div className="p-5">
          <Navbar />
          <div className="borda border-b flex items-center justify-center h-full w-full"></div>
          <div className="flex flex-wrap justify-between text-center">
            <h1 className="dev text-white text-6xl font-bold ">Desenvolvedor<br /> Front-end</h1>
            <h1 className="dev text-white text-2xl font-semibold leading-normal">Olá, me chamo Carlos Eduardo Desenvolvedor <a className="underline decoration-pink-500">Web</a> e <a className="underline decoration-sky-500">
              Mobile</a><br /> apaixonado por <a className="underline decoration-indigo-500">
                TypeScript</a>. Criando soluções inovadoras<br /> e eficientes para web e mobile. Let&apos;s code together!</h1>
          </div>
        </div>

      </main>
    </>
  );
}
