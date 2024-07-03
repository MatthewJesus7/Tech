import Colors from "../items/Colors";

function Card({ title, price, backgroundImage, customclass, link, target, rel, type, typeInner  }) {

    function typeInnerCard() {
        if(typeInner === 'a') {
            console.log('funciona')
        } else {
            console.log('não funciona')
        }
    }

    return(
        <a href={link} target={target} rel={rel}>
            <div
                className={`${type} bg-white ${customclass}`}

                style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className={typeInner}>
                    {typeInnerCard && <Colors/>} 
                    <h3 className="text-xl">{title}</h3>
                    <p className="text-lg">{price}</p>
                </div>
            </div>
        </a>
    );
}

export default Card;
