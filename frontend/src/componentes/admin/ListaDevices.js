import React from "react";
import {Container, Table, Image} from 'react-bootstrap'
import styled from 'styled-components'
import {useApi} from '../../hooks/useApi'
import moment from 'moment'
import EstilosGlobais from "../globalStyles";

const Foto = styled(Image)`
    height: 100px;
`;



const ListaDevices = ()=>{

    const {data} = useApi('/devices')
    return(
        <Container>
            <Table striped bordered hover variant="dark">
                <EstilosGlobais />
                <thead>
                    <tr className="tableHeader">
                        <th>Foto</th>
                        <th>Dispositivo</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody className="tbodyField">
                
                        {data?.message?.map(item =>{
                            return(
                                <tr>
                                    <td><Foto src={item.imagem} alt='imagem'></Foto></td>
                                    <td>{item.nome}</td>
                                    <td>{moment(item.data).format('DD-MM-YYYY')}</td>
                                </tr>)
                        })}
                    
                </tbody>
            </Table>

        </Container>
    )

}

export default ListaDevices