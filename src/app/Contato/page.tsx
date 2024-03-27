import React from "react";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500">
          <Navbar/>
          <div className="borda border-b flex items-center justify-center h-full w-full"></div>
      </main>
    </>
  );
}
