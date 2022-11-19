import React from "react";
import styled from "styled-components";

const Inicio = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;

`;

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: bold;
        font-size: 3rem;
        color: yellow;
    }
    h3{
        font-weight: bold;
        font-size: 2rem;
        color: yellow;
    }



`;

const AboutUsPage = ()=>{
    return(
        <Inicio>
            <Descricao>
            <div>
            <h2>Sobre Nós</h2>
            <h3>Alunos da UNIVESP</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </Descricao>
        </Inicio>
    )

}
export default AboutUsPage