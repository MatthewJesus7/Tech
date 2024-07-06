import React from 'react';
import Colors from '../items/Colors'

const Card = ({ link, target, rel, type, customclass, backgroundImage, typeInner, title, price }) => {
  // Função para renderizar conteúdo condicionalmente dentro do card
  const typeInnerCard = () => {
    if (typeInner === 'product') {
      return <Colors />;
    }
    
  };

  return (
    <a href={link} target={target} rel={rel}>
      <div
        className={`${type} bg-white ${customclass}`}
        style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className={typeInner}>
          {typeInnerCard()}
          <h3 className="text-xl mt-5">{title}</h3>
          <p className="text-lg">{price}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
