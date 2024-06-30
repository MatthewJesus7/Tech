function Card({ title, price, backgroundImage, customclass, children }) {
    return(
        <div 
            className={`min-w-64 h-96 shadow-lg border rounded-xl mr-5 hover:min-w-[266px] hover:h-[394px] ${customclass}`}
            style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-lg">{price}</p>
                {children}
                
        </div>
    );
}

export default Card;
