import Image from "next/image";
import {NextFont} from "next/dist/compiled/@next/font";
import {Orbitron} from "next/font/google";

const orbitron: NextFont = Orbitron({
    subsets: ["latin"],
})

import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={`${orbitron.className} ${styles.footer}`}>
            <p>Find me:</p>
            <a href="https://github.com/csmateixeira" target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" alt="Github Logo"
                       width={25} height={25}/>
            </a>
            <a href="https://www.linkedin.com/in/sofiateixeira" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" alt="Linkedin Logo"
                       width={25} height={25}/>
            </a>
        </footer>
    );
}
