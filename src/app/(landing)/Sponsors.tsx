import Section from '../../components/Section';
import Sponsor from './Sponsor';


export default function Sponsors() {
    return (
        <Section title="Sponsors" id="sponsors">
            <p>
                To sponsor our event, email us at <a href="mailto:ghshacks@gmail.com">ghshacks@gmail.com</a>.
                Find our sponsorship prospectus <a target="_blank" rel="noopener noreferrer" href="/docs/sponsorship_prospectus.pdf">here</a>.
            </p>

            <div className="pt-8 pb-2 flex flex-wrap gap-x-5 gap-y-2 items-center justify-center">
                <Sponsor href="https://www.axure.com/" src="/sponsors/azure.svg" alt="Azure" />
                <Sponsor href="https://www.applied-computing.org/" src="/sponsors/ACF.png" alt="Applied Computing Foundation" />
                <Sponsor href="https://gen.xyz/" src="/sponsors/XYZ.svg" alt="XYZ" />
                {/* <Sponsor href="https://www.wolfram.com" src="/sponsors/wolfram.svg" alt="Wolfram" />
                <Sponsor href="https://artofproblemsolving.com" src="/sponsors/aops.png" alt="AoPS" />
                <Sponsor href="https://mule.to/p3df" src="/sponsors/sticker-mule.png" alt="Sticker Mule" />
                <Sponsor href="https://www.janestreet.com/" src="/sponsors/jane-street.png" alt="Jane Street" />
                <Sponsor href="https://linktr.ee/leadinglearners" src="/sponsors/leading-learners.png" alt="Leading Learners" />
                <Sponsor href="https://www.leangap.org/" src="/sponsors/leangap.svg" alt="Leangap" />
                <Sponsor href="https://www.mitchellparkteenservices.org/thinkfund" src="/sponsors/think-fund.png" alt="Think Fund" />
                <Sponsor href="https://www.cityofpaloalto.org/" src="/sponsors/city-of-palo-alto.png" alt="City of Palo Alto" />
                <Sponsor href="https://gunn.paloaltopta.org/" src="/sponsors/ptsa.png" alt="Gunn PTSA" /> */}
            </div>
        </Section>
    )
}
