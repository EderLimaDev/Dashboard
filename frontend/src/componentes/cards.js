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
    h6{
        text-align:center;
        color: yellow;
        font-weight: bold;
        font-size: 14px;
        line-height: 5px;
        padding-bottom: 9px;
    }


    h3{
        color: yellow;
        font-weight: bold;
        text-align: center;
        font-size: 1rem;
    }
    h5{
        padding-left: 1rem;
        padding: 0.3rem 1rem;
        color: white;
        font-weight: bold;
        text-align: center;
    }

    span{
        color: white;
        font-weight: bold;
        text-align: center;
        font-size: 1rem;
        padding-left: 10px;
    }

`;

const Info = styled.div`
    color:white;
`; 


const Card = ({projeto})=>{
    console.log(projeto)
    var ultimo = projeto.medidas.length
    console.log(ultimo)
    
    return(
        
        <StyleCards>
            <Link to={`/medidas/${projeto._id}`}>
                <Conteudo>
                    <h5>{projeto.nome}</h5>
                    <img src={projeto.imagem} alt="Description"/>
                    <h5>Últimas medidas:</h5>
                    <h6>{projeto.medidas[ultimo-1].data}, {projeto.medidas[ultimo-1].hora}</h6>
                    <h6>{projeto.medidas[ultimo-1].nest}</h6>
                    <Info>
                        <h3>Kw/h :<span>{projeto.medidas[ultimo-1].kwh}</span></h3>
                        <h3>Amp :<span>{projeto.medidas[ultimo-1].corrente}</span></h3>
                        <h3>Voltagem :<span>{projeto.medidas[ultimo-1].voltagem}</span></h3>
                        <h3>Ft.P. :<span>{projeto.medidas[ultimo-1].fp}</span></h3>
                    </Info>
                </Conteudo>
            </Link>
     
     </StyleCards>
    )
}
export default Card