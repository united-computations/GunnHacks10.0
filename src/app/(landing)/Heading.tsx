import { Overpass } from '@next/font/google';
import { RiFacebookFill, RiInstagramFill, RiDiscordFill } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';

const overpass = Overpass({
    subsets: ['latin']
});

export default function Heading() {
    return (
        <section id="heading" className="text-white text-center h-screen relative flex flex-col items-center justify-center p-5">
            <div className={'mb-2 relative ' + overpass.className}>
                <span className="pt-2 text-6xl sm:text-9xl tracking-wider">GunnHa<span className="invisible">X</span></span>
                <img className="absolute w-30 h-30 left-[calc(26rem)] top-[-3rem]" src="/X.svg" alt="lambda" />

                <div className="ml-3 mt-[-.5rem]"> 
                    <p className="mb-2 w-96 text-base text-left">
                        {/* Make, Build, Create & Learn. It’s GunnHacks 10.0, Gunn’s 24‑hour high school hackathon! */}
                        January 27-28, 2024 | Gunn High School.<br />
                    </p>

                    <div className="flex gap-4 text-2xl">
                        {/* <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/GunnHacks" aria-label="Facebook">
                    <RiFacebookFill />
                </a> */}
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gunn.hacks/" aria-label="Instagram">
                            <RiInstagramFill />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/pyJmTpRWZJ" aria-label="Instagram">
                            <RiDiscordFill />
                        </a>
                        <a href="mailto:ghshacks@gmail.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
                

            </div>
            
            {/* <strong className="text-xl mb-4">January 21-22, 2023</strong> */}

            
        </section>
    )
}
