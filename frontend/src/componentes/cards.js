import { response } from "express";
import React from "react";
import styled from "styled-components";

const StyleCards = styled.div`
    box-sizing: border-box;
    background-color: #58617b;
    border-color: black;
    cursor: pointer;
    overflow: hidden;

    a{
        text-decoration: none;
    }

`;
const Conteudo = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    h3{
        padding-left: 1rem;
        color: white;
        font-weight: bold;
        text-align: center;
    }
    h4{
        padding-left: 1rem;
        color: black;
        font-weight: bold;
    }

`;

const Info = styled.div`
    color:white;
`; 


const Cards = ({projeto})=>{
    return(
       <>
            <StyleCards>
                    <Conteudo>  
                        <h3>{projeto.nome}</h3>
                        <img src={projeto.imagem} alt="imagem"/>
                            <Info>
                                <h4>Kw/h :{projeto.kwh}</h4>
                                <h4>Amp :{projeto.corrente}</h4>
                                <h4>Volts :{projeto.voltagem}</h4>
                                <h4>F.P :{projeto.fp}</h4>
                            </Info>
                    </Conteudo>
            </StyleCards>

        </> 
    )


}

export default Cards