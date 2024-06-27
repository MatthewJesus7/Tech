function Link({ text, href, target, rel }) {
    return(
            <a
            href={href}
            target={target}
            rel={rel}>
                {text}
            </a>
    )
}

export default Link