export default function Sponsor(props: {href: string, src: string, alt: string}) {
    const {href, src, alt} = props;
    return (
        <a target="_blank" rel="noopener noreferrer" href={href}>
            <img
                src={src}
                alt={alt}
                className="max-h-[6rem] px-4 py-2"
            />
        </a>
    )
}
