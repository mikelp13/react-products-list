import React from 'react'
import { HeaderStyled } from './HeaderStyled'
import Navigation from './navigation/Navigation'

const Header = () => 
 (
    <HeaderStyled>
      <div className="container">
      <Navigation/>
      </div>
    </HeaderStyled>
  )


export default Header
