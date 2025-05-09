import Image from "next/image";
import Link from "next/link";
import {NextFont} from "next/dist/compiled/@next/font";
import {Orbitron} from "next/font/google";

const orbitron: NextFont = Orbitron({
    subsets: ["latin"],
})

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={`${orbitron.className} ${styles.header}`}>
            <div className={styles.logoContainer}>
                <Image
                    src="/logo.svg"
                    alt="Website Logo"
                    width={150} height={20} priority/>

                <Link href="/">
                    RaccoonBytes
                </Link>
            </div>

            <div className={styles.navLinks}>
                <Link href="/portfolio">My Career</Link>
                <p>/</p>
                <Link href="/interests">My Life</Link>
            </div>
        </header>
    );
}
