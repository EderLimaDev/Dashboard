import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const StyledMenu = styled.div`
    background: #588178;
    color: white;
    font-weight: bold;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    

    ul{
        display:flex;
        list-style-type: none;
        width: 60%;
        height: 3rem;
    }
    li{
        border:1px solid;
        color: white;
        width: 10em;
        text-align: center;
        height: 2rem;
        margin: auto;
        border-radius: 12px;
        &:hover{
            color: red;
            border:none;   
        }

    }
    a{
        margin: auto;
        width: 10em;
        height: 2rem;
        border-radius: 12px;
        text-decoration: none;
        &:hover{
            background-color: yellow;
        
            
        }
    }

`;

const Menu = ()=>{
    return(
        <div>
            <StyledMenu>
                <h1>Sistema de Medidas</h1>
                    <ul>
                        <Link to='/'><li>Inicio</li></Link>
                        <Link to='/medidas'><li>Medidas</li></Link>
                        <Link to='/administracao'><li>Administração</li></Link>
                        <Link to='/mensagens'><li>Mensagens</li></Link>

                    </ul>
            </StyledMenu>
        </div>

    )

} 

export default Menu