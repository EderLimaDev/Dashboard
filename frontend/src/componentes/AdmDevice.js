import React, {useState} from 'react'
import {Container, Table, Image, Button} from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'
import {useApi} from '../hooks/useApi'

const Foto = styled(Image)`
    height: 100px;
`;

function AdmDevice() { 
    const [show, setShow] = useState(false)
    const {data} = useApi('/devices')
    return (
    <Container>
       
            <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>ID Dispositivo</th>
                            <th>Nome</th>
                            <th>Data do Cadastro</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data?.data?.message?.map(item =>{
                        return(
                            <tr>
                                <td><Foto src={item.imagem} alt='imagem'></Foto></td>
                                <td>{item._id}</td>
                                <td>{item.nome}</td>
                                <td>{moment(item.data).format('DD-MM-YYYY')}</td>
                                <td>
                                    <Button variant="info">Editar</Button>&nbsp;&nbsp;
                                    <Button variant="danger">Deletar</Button>
                                </td>
                            </tr>)
                    })}
                        
                    </tbody>
                </Table>
    
    </Container>
  )
}
export default AdmDevice