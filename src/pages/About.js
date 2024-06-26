import React from 'react';
import {MDBContainer, MDBTypography} from 'mdb-react-ui-kit';

const About = () => {
  return (
    <div style={{marginTop: '100px'}}>
        <MDBContainer>
          <MDBTypography note noteColor='primary'>
            Somos um blog onde nosso público pode encontrar notícias relacionadas
            as mais diferentes categorias como Viagem, Gastronomia, Esportes, Academia, Tecnologia e Moda
            (Ainda em construção!)
          </MDBTypography>
        </MDBContainer>
    </div>
  )
}

export default About