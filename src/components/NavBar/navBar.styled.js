import styled from 'styled-components';

export const Header = styled.div`
margin: 10px 0;
padding: 10px;
display: flex;
justify-content: center;
background-color: yellow;
`
export const Button = styled.button`
margin-right: 25px; 
padding: 5px 10px;
scale: 1.2;
:focus,
:hover {
    scale: 1.5;
    cursor: pointer;
}
`