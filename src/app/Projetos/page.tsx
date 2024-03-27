import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Site1 from "../../../public/Images/Site1.png"
import Site2 from "../../../public/Images/Site2.png"



export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500">
        <Navbar />
        <div className="borda border-b flex items-center justify-center h-full w-full"></div>

        <div className="flex flex-wrap justify-evenly pt-5">

          <div className="flex bg-white w-[500px] rounded-xl">
            <a href="https://site-da-empresa.vercel.app/" className="text-center"><Image className="pt-3 px-3 rounded-xl" width={500} height={500} alt="" src={Site1} />Site de empresa</a>
          </div>
          <div className="flex bg-white w-[500px] rounded-xl">
            <a href="https://netflix-two-sigma.vercel.app/" className="text-center"><Image className="pt-3 px-3 rounded-xl" width={500} height={500} alt="" src={Site2} />Netflix</a>
          </div>

        </div>
      </main>
    </>
  );
}
