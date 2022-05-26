import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
width: 90%;
margin: 10px auto;
padding: 10px;
display: flex;
justify-content: center;
background-color: yellow;
`
export const Button = styled(NavLink)`
margin-right: 25px; 
padding: 5px 10px;
scale: 1.2;
text-decoration: none;
border: 1px solid red;
border-radius: 5px;
:hover {
    background-color: pink;
    cursor: pointer;
}
`