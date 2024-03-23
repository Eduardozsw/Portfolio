import Link from "next/link";

export default function Projetos() {
    return (
        <>
            <main className="img flex min-h-screen flex-col">
                <div className="box flex flex-col justify-star p-5">
                    <h1 className="texto font-bold text-4xl ">Carlos Eduardo</h1>
                    <ul className="flex flex-col">
                        <li><Link className="texto font-semibold text-2xl justify-start underline underline-offset-4 flex" href="/">Home</Link></li>
                        <li><Link className="texto font-semibold text-2xl justify-start flex" href="/">°</Link></li>
                        <li><Link className="texto font-semibold text-2xl underline underline-offset-4 flex pt-3" href="/Sobre">Sobre</Link></li>
                    </ul>
                    <div className="flex flex-wrap">
                        <a className="texto font-semibold text-2xl flex pt-3 px-3" href="https://site-da-empresa.vercel.app">Site da empresa</a>
                        <a className="texto font-semibold text-2xl flex pt-3 px-3" href="https://netflix-two-sigma.vercel.app">Netflix</a>
                    </div>
                </div>
            </main>
        </>
    )
}