

function Card(props) {
    return(
        <div className="min-w-64 h-96 shadow-lg border rounded-xl mr-10">{props.children}</div>
    )
}

export default Card