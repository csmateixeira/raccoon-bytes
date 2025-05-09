import Link from "next/link";
import Image from "next/image";
import {NextFont} from "next/dist/compiled/@next/font";
import {Orbitron} from "next/font/google";

const orbitron: NextFont = Orbitron({
    subsets: ["latin"],
})

import styles from './Home.module.css';

export default function Home() {
    return (
       <div className={styles.backdrop}>
           <div className={styles.intro}>
               <p>Hey, I&apos;m Carla</p>
               <p>I&apos;m a Tech Lead and full stack software engineer with a passion for all aspects of technology. I am always excited to try new tools and languages and I love sharing those experiences with others.</p>
           </div>

           <div className={styles.aboutContainer}>
               <div className={styles.about}>
                   <h1 className={orbitron.className}>About Me</h1>
                   <p>I started out as a Java backend developer but have  picked up many different skills along the way. I can now say I am a full stack developer having worked in several projects involving backend and frontend components. </p>
                   <p>I also have a lot of experience leading successful projects and teams including solutioning and architecture.</p>
                   <p>I am currently living in the beautiful island of Ireland but I am more than happy to work remotely and have experience working with remote teams.</p>
                   <p>When I am not working you can find me reading my favourite book, playing video games or trying a completely new hobby. </p>

                   <div className={styles.aboutMore}>
                       <p>Interested to know more about my career? </p>
                       <p><Link href="/portfolio">Go to career page</Link></p>
                   </div>
               </div>

               <div className={styles.aboutSidebar}>
                   <h1 className={orbitron.className}>What I&apos;m currently working on</h1>
                   <p>I&apos;m currently working on a project using React and Next.js. I am also learning about the latest trends in web development, including server-side rendering and static site generation.</p>
                   <h1 className={orbitron.className}>What I&apos;m playing now</h1>
                   <div className={styles.aboutSidebarNowPlaying}>
                       <p>The Elder Scrolls 4: Oblivion (Remastered)</p>
                       <Image src="/oblivion.png" alt="Oblivion Cover"
                              width={30} height={30}/>
                   </div>
               </div>
           </div>
       </div>
    );
}
