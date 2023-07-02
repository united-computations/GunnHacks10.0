import Section from '../../components/Section';


export default function About() {
    return (
        <Section title="About" id="about">
            <p className="mb-4">The tenth iteration of GunnHacks, Gunn High School's annual hackathon.</p>
            <p className="mb-4">
                GunnHacks is a 24-hour high school hackathon hosted by the United Computations club at Gunn High School.
                Throughout the years, we have continued this valued tradition to encourage students of all skill levels
                and backgrounds to make cool projects and share what they can do.
            </p>
            <p>
                Join us this year for an in-person, 24 hour high school hackathon with many games and workshops to look forward to.
                Work in teams of up to four to create something amazing. We welcome any PAUSD student with an interest
                in technology!
            </p>

            {/* <p>
                Registration is now open! Register for GunnHacks <a href="/register">here</a>.
                All hackers are expected to follow MLH's <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">Code of Conduct</a>.
            </p>
            <p>
                Before you participate, please refer to the MLH Code of Conduct <a href="docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">here</a>
                and our hacker guide <a href="https://docs.google.com/document/d/1TPr6b7RYaQ9f5ruTVCpPF0TaenZ0EHUv00PDlF_rgUI/" target="_blank" rel="noopener noreferrer">here</a>.
            </p> */}

        </Section>
    )
}
