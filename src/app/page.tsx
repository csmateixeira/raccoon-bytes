import Image from "next/image";
import {NextFont} from "next/dist/compiled/@next/font";
import {Orbitron} from "next/font/google";
import Link from "next/link";

const orbitron: NextFont = Orbitron({
    subsets: ["latin"],
})

export default function Home() {
    return (
        <div className="m-5 flex flex-col bg-tone0 rounded-lg">
            <header
                className={`${orbitron.className} bg-tone1 p-6 w-full rounded-t-lg text-white flex flex-row items-center justify-between`}>
                <div className="flex flex-row items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Website Logo"
                        width={150} height={20} priority/>

                    <Link href="/" className="text-3xl font-medium underline text-shadow-lg text-shadow-black">
                        RaccoonBytes
                    </Link>
                </div>

                <div className="gap-5 flex flex-row items-center uppercase text-sm text-shadow-md text-shadow-black">
                    <p className="underline cursor-pointer">Portfolio</p>
                    <p>/</p>
                    <p className="underline cursor-pointer">Interests</p>
                    <p>/</p>
                    <p className="underline cursor-pointer">Travels</p>
                </div>
            </header>

            <main className="p-2.5 w-full"></main>

            <footer
                className={`${orbitron.className} bg-tone1 p-2.5 gap-4 w-full rounded-b-lg text-white flex flex-row justify-center items-center`}>
                <p className="uppercase text-sm text-shadow-md text-shadow-black">Find me on:</p>
                <a href="https://github.com/csmateixeira" target="_blank" rel="noopener noreferrer">
                    <Image src="/github.svg" alt="Github Logo"
                           width={25} height={25}/>
                </a>
                <a href="https://www.linkedin.com/in/sofiateixeira" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.svg" alt="Linkedin Logo"
                           width={25} height={25}/>
                </a>
            </footer>
        </div>
    );
}
