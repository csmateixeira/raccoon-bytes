import type {Metadata, Viewport} from "next";
import {Fira_Code} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {Header} from "@/components/header/Header";

import "./globals.css";
import {Footer} from "@/components/footer/Footer";

const firaCode: NextFont = Fira_Code({
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "RaccoonBytes"
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${firaCode.className}`}>
        <div className="m-10 flex flex-col bg-tone0 rounded-lg justify-between">
            <Header/>

            <main className="p-6 w-full">
                {children}
            </main>

            <Footer/>
        </div>
        </body>
        </html>
    );
}
