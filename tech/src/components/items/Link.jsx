function Link({ text, href, target, rel, ionClick }) {
    return(
            <a className="hover:underline hover:cursor-pointer"
            href={href}
            target={target}
            rel={rel}>
                {text}
            </a>
    )
}

export default Link