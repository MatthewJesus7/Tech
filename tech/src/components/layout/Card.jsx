function Card({ title, price, backgroundImage, customclass, children }) {
    return(
        <div 
            className={`min-w-64 h-96 shadow-lg border rounded-xl mr-5 ease-out duration-300 hover:scale-105 bg-white ${customclass}`}
            style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-lg">{price}</p>
                {children}
                
        </div>
    );
}

export default Card;
