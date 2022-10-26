import React from 'react'
import {Container, Img } from "./NotFound.styled";
import NF from "../../assets/images/404.jpg";

const NotFound = () => {
  return (
    <Container>
      <Img src={NF} alt="" />
    </Container>
  )
}

export default NotFound