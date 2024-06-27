function Button({ text, customClass }) {
    return(
        <button className={customClass}>{text}</button>
    )
}

export default Button