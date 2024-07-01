function Card({ title, price, backgroundImage, customclass, children, link, target, rel }) {
    return(
        <a href={link} target={target} rel={rel}>
            <div
                className={`card bg-white ${customclass}`}
                style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                        <h3 className="text-xl">{title}
                        </h3>
                        <p className="text-lg">{price} </p>
                        {children}
            </div>
        </a>
    );
}

export default Card;
