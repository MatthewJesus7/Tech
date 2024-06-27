function Section(props) {
    return <section className={`"max-w-7xl h-screen p-10 " ${props.customClass}`}>
        {props.children}
    </section>
}

export default Section