

function Card( props ) {
    return(
        <div className={`" min-w-64 h-96 shadow-lg border rounded-xl mr-5 hover:min-w-[266px] hover:h-[394px] " ${props.customclass}`}>
            {props.children}
        </div>
    )
}

export default Card