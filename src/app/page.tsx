import Image from "next/image";
import {NextFont} from "next/dist/compiled/@next/font";
import {Orbitron} from "next/font/google";

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

                    <a href="/" className="text-3xl font-medium underline text-shadow-lg text-shadow-black">RaccoonBytes</a>
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
                {/*<GithubOriginalIcon*/}
                {/*    color="#FFFFFF"*/}
                {/*    className="h-6 w-6"/>*/}
                {/*<LinkedinPlainIcon*/}
                {/*    color="#FFFFFF"*/}
                {/*    height={25} width={25}/>*/}
            </footer>
        </div>

        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        //   <header>
        //
        //   </header>
        //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        //     <Image
        //       className="dark:invert"
        //       src="/next.svg"
        //       alt="Next.js logo"
        //       width={180}
        //       height={38}
        //       priority
        //     />
        //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        //       <li className="mb-2 tracking-[-.01em]">
        //         Get started by editing{" "}
        //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
        //           src/app/page.tsx
        //         </code>
        //         .
        //       </li>
        //       <li className="tracking-[-.01em]">
        //         Save and see your changes instantly.
        //       </li>
        //     </ol>
        //
        //     <div className="flex gap-4 items-center flex-col sm:flex-row">
        //       <a
        //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         <Image
        //           className="dark:invert"
        //           src="/vercel.svg"
        //           alt="Vercel logomark"
        //           width={20}
        //           height={20}
        //         />
        //         Deploy now
        //       </a>
        //       <a
        //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
        //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         Read our docs
        //       </a>
        //     </div>
        //   </main>
        //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        //     <a
        //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <Image
        //         aria-hidden
        //         src="/file.svg"
        //         alt="File icon"
        //         width={16}
        //         height={16}
        //       />
        //       Learn
        //     </a>
        //     <a
        //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <Image
        //         aria-hidden
        //         src="/window.svg"
        //         alt="Window icon"
        //         width={16}
        //         height={16}
        //       />
        //       Examples
        //     </a>
        //     <a
        //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <Image
        //         aria-hidden
        //         src="/globe.svg"
        //         alt="Globe icon"
        //         width={16}
        //         height={16}
        //       />
        //       Go to nextjs.org →
        //     </a>
        //   </footer>
        // </div>
    );
}
