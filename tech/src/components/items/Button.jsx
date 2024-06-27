function Button({ text, CustomClass }) {
    return(
        <button className={CustomClass}>{text}</button>
    )
}

export default Button