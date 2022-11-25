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
        font-size: 12px;
        line-height: 5px;
        padding-bottom: 15px;
    }


    h3{
        color: white;
        font-weight: bold;
        text-align: center;
    }
    h5{
        padding-left: 1rem;
        padding: 0.3rem 1rem;
        color: white;
        font-weight: bold;
        text-align: center;
    }

`;

const Info = styled.div`
    color:white;
`; 


const Card = ({projeto})=>{
    
    // var ultimo = projeto.medidas.length
    // console.log(ultimo)
    
    return(
        
        <StyleCards>
            <Link to={`/medidas/${projeto._id}`}>
                <Conteudo>
                    <h5>{projeto.nome}</h5>
                    <img src={projeto.imagem} alt="Description"/>
                    <h5>Últimas medidas:</h5>
                    {/* <h6>{projeto.medidas[ultimo-1].data}, {projeto.medidas[ultimo-1].hora}</h6> */}
                    <Info>
                        <h6>Kw/h :{projeto.medidas.kwh}</h6>
                        <h6>Amp :{projeto.corrente}</h6>
                        <h6>Voltagem :{projeto.voltagem}</h6>
                        <h6>Ft.P. :{projeto.fp}</h6>
                    </Info>
                </Conteudo>
            </Link>
     
     </StyleCards>
    )
}
export default Card