import type {Metadata, Viewport} from "next";
import {Fira_Code} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

import "./globals.css";

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

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${firaCode.className} antialiased bg-black`}>
                {children}
            </body>
        </html>
    );
}
