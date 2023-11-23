import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Register | GunnHacks 9.0'
}

export default function Register() {
    return (
        <div className="flex justify-center">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdF_KFH0pH_ryAx3uYglID2ITeXvoTaHfTh2i9YMgnlwLC91A/viewform?usp=sf_link&embedded=true"
                className="absolute border-none w-full h-full inset-0 mx-auto"
            >
                Loading…
            </iframe>
        </div>
    )
}