import styled from "styled-components";


export const Nav = styled.nav`
background-color: #ea047e;
height: 60px;
position: fixed;
bottom: 0;
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 20px;
padding-right: 20px;
`;


export const Par =styled.p`
color: white;
font-weight: 500;
`;



export const Github =styled.a`
color: white;
font-weight: 500;
text-decoration: none;
&:hover{
    color: #00f5ff;
}
`;