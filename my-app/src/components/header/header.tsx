import React from 'react'
import * as Styled from './header.styled'

const Header = (props: {}) => {
  return (
    <Styled.HeaderWrapper>
      <a href={`${process.env.PUBLIC_URL}`}>
        <Styled.Logo src={`${process.env.PUBLIC_URL}/assets/logo.png`} /> <br/>
        <h5>Cliquer ici pour retourner à l'accueil</h5>
      </a>
    </Styled.HeaderWrapper>
  )
}

export default Header
