import React from "react";
import * as Styled from "./footer.styled";
interface Props {}
const Footer = (props: Props) => {
  return (
    <Styled.FooterWrapper>
      <h2>Fun Fact</h2>
      <p>
        Le goût et l'odeur de l'agneau auraient été jugés trop forts par le
        client occidental qui préfère des viandes au caractère gustatif moins
        fort. On retrouve donc aujourd'hui quasi exclusivement du veau et de la
        dinde dans nos sandwichs.
      </p>
    </Styled.FooterWrapper>
  );
};
export default Footer;
