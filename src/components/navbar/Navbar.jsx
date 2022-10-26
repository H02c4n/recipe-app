import React from 'react'
import {Link} from "react-router-dom"
import {Nav, Div, Ul, Li} from "./Navbar.styled";
import {BiDish} from "react-icons/bi";

const linkStyle = {
    color:"#00f5ff",
    textDecoration:"none",
    }

const Navbar = ({isUser}) => {
  return (
    
    <Nav>
       <Link to="/">
       <BiDish style={{fontSize: "40px", color:"#00F5FF"}}/>
       </Link>
       <Div>
        <Ul>
           
        {isUser ? <><Li>
                <Link className='navlink' style={linkStyle} to="/">Home</Link>
            </Li>

           <Li>
                <Link className='navlink' style={linkStyle} to="/about">About</Link>
            </Li></> : ""}

            <Li>
                <Link className='navlink' style={linkStyle} to="/login">Login</Link>
            </Li>
        </Ul>
       </Div>
    </Nav>
  )
}

export default Navbar