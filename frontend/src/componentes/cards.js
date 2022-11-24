import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const StyleCards = styled.div`
    box-sizing: border-box;
    background-color: #0b305e;
    border-color: black;
    border-radius: 12px;
    cursor: pointer;
    overflow: hidden;
    

    a{
        text-decoration: none;
    }

`;
const Conteudo = styled.div` 
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    img{
        max-width: 200px;

    }


    h3{

        color: white;
        font-weight: bold;
        text-align: center;
    }
    h4{
        padding-left: 1rem;
        padding: 0.3rem 1rem;
        color: white;
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
                        <Link to={`/medidas/${projeto._id}`}>
                            <h3>{projeto.nome}</h3>
                            <img src={projeto.imagem} alt="imagem"/>
                                <Info>
                                    <h4>Kw/h :{projeto.kwh}</h4>
                                    <h4>Amp :{projeto.corrente}</h4>
                                    <h4>Volts :{projeto.voltagem}</h4>
                                    <h4>F.P :{projeto.fp}</h4>
                                </Info>
                         </Link>  
                    </Conteudo>
            </StyleCards>

        </> 
    )


}

export default Cards