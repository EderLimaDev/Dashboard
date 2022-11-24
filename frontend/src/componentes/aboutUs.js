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
    background-color: #0b305e;
    border-radius: 25px;
    text-align: center;

    h3{
        font-weight: bold;
        font-size: 2rem;
        color: yellow;
        padding-top: 20px;
    }
    p{
        margin:auto;
        width:100%;
        margin-left: 2.7rem;
    
    }



`;

const AboutUsPage = ()=>{
    return(
        <Inicio>
            <Descricao>
            <div>
            <h3>MEDIDOR DE ENERGIA INTELIGENTE</h3>
            <p>Este é um projeto da disciplina de TCC dos alunos da UNIVESP (Universidade Virtual do Estado de São Paulo) que tem por finalidade monitorar o consumo de energia dos dispositivos para controle de gastos.</p>
            </div>
            </Descricao>
        </Inicio>
    )

}
export default AboutUsPage