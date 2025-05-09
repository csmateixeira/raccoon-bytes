import {NextFont} from "next/dist/compiled/@next/font";
import {Orbitron} from "next/font/google";

const orbitron: NextFont = Orbitron({
    subsets: ["latin"],
})

export default function Portfolio() {
    return (
      <h1 className={`${orbitron.className} text-3xl text-white`}>Portfolio</h1>
    );
}
