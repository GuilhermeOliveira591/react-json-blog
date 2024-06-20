import { MDBBadge } from 'mdb-react-ui-kit';
import React from 'react';

const Badge = ({children, styleInfo}) => {
    const colorKey = {
      Moda: 'primary',
      Viagem: 'success',
      Academia: 'danger',
      Gastronomia: 'warning',
      Tecnologia: 'info',
      Esportes: 'dark'
    }

    const cleanArray = (children) => {
      return children.filter(item => item.trim() !== "");
    };

    const cleanedChildren = cleanArray(children);
    
  return (
    <h5 style={styleInfo}>
      <MDBBadge color={colorKey[cleanedChildren]}> {children} </MDBBadge>
    </h5>
  )
}

export default Badge