import styled from 'styled-components';


/*
color1:"#EA047E",
color2:"#FF6D28",
color3:"#FCE700",
color4:"#00F5FF"  */

export const Nav = styled.nav`
background-color: #ea047e;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 20px;
padding-right: 20px;
`;

export const Div = styled.div`
height: 24px;
line-height: 24px;
`;

export const Ul = styled.ul`
display: flex;
justify-content: space-evenly;
text-decoration: none;
`;

export const Li = styled.li`
margin-right: .5rem;
font-size: 1.1rem;
font-weight: 700;
text-transform: uppercase;
display: flex;
align-items: center;
&:hover .navlink{
    color: #ff6d28 !important;
}
`;