import React from 'react'
import * as Styled from './footer.styled';

interface Props {
  
}

const Footer = (props: Props) => {
  return (
    <Styled.FooterWrapper>
     <div>
      <h1>Fun Fact </h1>
      <p> Le goût et l'odeur de l'agneau auraient été jugés trop forts par le
        client occidental qui préfère des viandes au caractère gustatif moins
        fort. On retrouve donc aujourd'hui quasi exclusivement du veau et de la
        dinde dans nos sandwichs.</p>
        </div>
    </Styled.FooterWrapper>
  )
}

export default Footer