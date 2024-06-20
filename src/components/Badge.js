import React from 'react';
import { MDBBadge } from 'mdb-react-ui-kit';

const Badge = ({ children, styleInfo }) => {
  const colorKey = {
    Moda: 'primary',
    Viagem: 'success',
    Academia: 'danger',
    Gastronomia: 'warning',
    Tecnologia: 'info',
    Esportes: 'dark'
  };

  // Função para limpar a lista de itens vazios ou apenas com espaços
  const cleanArray = (arr) => {
    return arr.filter(item => item.trim() !== "");
  };

  // Verifica se children é um array e tem mais de um item
  if (Array.isArray(children) && children.length > 1) {
    const cleanedChildren = cleanArray(children);

    return (
      <h5 style={styleInfo}>
        {cleanedChildren.map((item, index) => (
          <MDBBadge key={index} color={colorKey[item]}>
            {item}
          </MDBBadge>
        ))}
      </h5>
    );
  } else {
    // Caso children não seja um array ou tenha apenas um item
    // Renderiza um único MDBBadge
    return (
      <h5 style={styleInfo}>
        <MDBBadge color={colorKey[children]}>
          {children}
        </MDBBadge>
      </h5>
    );
  }
};

export default Badge;
