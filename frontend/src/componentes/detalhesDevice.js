import React from "react";
import {useParams} from "react-router-dom";
import {useApi} from "../hooks/useApi";
import styled from 'styled-components';


const Conteiner = styled.div` 
    padding-top: 3rem;
    display: flex;
    align-items: center;
    margin:auto;
`;
const Titulo = styled.div` 
    background-color: gray;
    width: 70%;
    min-height: 70vh;
    position:absolute;
    left: 15%;

    h2{
        padding-left: 1rem;
        color: white;

    }
    img{
        width: 200px;
        height: 200px;
        padding-left: 1rem;
    }

`;

const Table = styled.div` 
    padding: 3rem;

`;


const DetalhesDevice = ()=>{
    const {id} = useParams()
    const {data} = useApi(`/devices/detalhes/${id}`)
    console.log(data)
    return(
        <Conteiner>
            <Titulo><h4>{data?.message?.nome}</h4></Titulo>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Kw/H</th>
                        <th>Corrente</th>
                        <th>Voltagem</th>
                        <th>Fator de Potência</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.message?.medidas?.map(med =>{
                          return(<tr>
                            <td>{med.kwh}</td>
                            <td>{med.corrente}</td>
                            <td>{med.voltagem}</td>
                            <td>{med.fp}</td>
                            <td>{med.data}</td>
                            <td>{med.hora}</td>
                          </tr>)
                    })}
                    
                </tbody>
            </Table>
        </Conteiner>
    )
}
export default DetalhesDevice