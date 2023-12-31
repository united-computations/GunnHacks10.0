import { Overpass } from '@next/font/google';
import { RiFacebookFill, RiInstagramFill, RiDiscordFill } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';

const overpass = Overpass({
    subsets: ['latin']
});

export default function Heading() {
    return (
        <section id="heading" className="text-white text-center h-screen relative flex flex-col items-center justify-center p-5 pb-[20vh]">

            <div className={'mb-2 relative flex flex-col items-center md:block ' + overpass.className}>
                <span className="pt-2 text-6xl md:text-9xl tracking-wider">GunnHa<span className="invisible">XX</span></span>
                <img className="absolute w-32 md:w-64 left-[15rem] top-[-1.6rem] md:left-[calc(26rem)] md:top-[-2.9rem]" src="/X.svg" alt="X" />

                <div className="ml-3 md:mt-[-.5rem] flex flex-col items-center md:block">
                    <p className="mb-2 w-96 text-base mt-16 md:mt-0 md:text-left">
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

            <a id="mlh-trust-badge" style={{ display: "block", maxWidth:"100px", minWidth:"60px", position:"fixed", right:"50px", top:0, width:"10%", zIndex:10000, filter: "drop-shadow(0px 9px 12px #00000055)" }} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" target="_blank">
                <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" alt="Major League Hacking 2024 Hackathon Season" style={{width: "100%"}} />
            </a>
        </section>
    )
}
