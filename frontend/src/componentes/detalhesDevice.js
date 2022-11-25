import React from "react";
import {useParams} from "react-router-dom";
import {useApi} from "../hooks/useApi";
import styled from 'styled-components';
import {Container, Table} from 'react-bootstrap';


const Titulo = styled.div` 
    background-color: #0b305e;
    width: 100%;
    min-height: 8vh;
    padding-top: 15px;
    text-align: center;
    border-radius: 12px;
    margin-bottom: 5px;

    h4{
        font-weight: bold;
        color: white;
        text-transform:uppercase;
        font-size:1.5rem ;

    }
`;


const DetalhesDevice = ()=>{
    const {id} = useParams()
    const {data} = useApi(`/devices/detalhes/${id}`)
    console.log(data)
    return(
        <>
        
        <Container className="detalhesDevices">
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
        </Container>
    </>
    )
}
export default DetalhesDevice