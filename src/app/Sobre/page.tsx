import Link from "next/link";

export default function Sobre() {
    return (
        <>
            <main className="img flex min-h-screen flex-col">
                <div className="box flex flex-col justify-star p-5">
                    <h1 className="texto font-bold text-4xl ">Carlos Eduardo</h1>
                    <ul className="flex flex-col">
                        <li><Link className="texto font-semibold text-2xl justify-start underline underline-offset-4 flex" href="/">Home</Link></li>
                        <li><Link className="texto font-semibold text-2xl justify-start underline underline-offset-4 flex" href="/Projetos">Projetos</Link></li>
                        <li><Link className="texto font-semibold text-2xl justify-start flex pt-3" href="/">°</Link></li>
                    </ul>
                </div>
            </main>
        </>
    )
}