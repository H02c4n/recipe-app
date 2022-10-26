import React from 'react'
import { Nav, Par, Github } from "./Footer.styled";
const Footer = () => {
  return (
    <Nav>
      <div>
        <Par>Copyright © 2022 || <Github href="https://github.com/H02c4n">H02c4n</Github> </Par>
      </div>
      <div>
        <Par>Sweden/Helsingborg</Par>
      </div>
      </Nav>
  )
}

export default Footer