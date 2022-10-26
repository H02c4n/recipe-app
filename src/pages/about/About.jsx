import React from 'react'
import { Container, Info } from './About.styled'
import Coding from "../../assets/images/coding.svg";

const About = () => {
  return (
    <Container className='pb-5'>
        <img src={Coding} style={{width:"45%", marginLeft:"1rem"}} alt="" />
      <div>
        <div className='text-center mx-auto' style={{width:"60%"}}>
        <Info>
        My name's Halil. I'm 35 years old. I'm from Turkey. I was born in 1987 in Konya. I studied economy at Erciyes University. My favourite colors are dark blue and yellow. My favourite sports are football and basketball. I'm interested in marbling art and relief art. I like going for a walk and being in nature. I like reading all sorts of books especially philosophical books. I used to read every day. However, right now I can't read as much as before. I like writing programming code. I live in Helsingborg. I lived in three different cities in Sweden. These are Stockholm, Göteborg and Malmö. 
        </Info>
        </div>
      </div>
    </Container>
  )
}

export default About