import React, {useState} from 'react'
import {Container, Table, Image, Button} from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'
import {useApi} from '../hooks/useApi'
import FormEdit from './formEdit'
import { editRegistro, deleteRegistro } from '../services/api'
import caixaDialogo from './caixaDialogo'

const Foto = styled(Image)`
    height: 100px;
`;

function AdmDevice() { 

    const del = (id)=>{
        deleteRegistro(id)
    }

    const ed = (id, data)=>{
        editRegDevice(id, data)
    }

    const [escolha, setEscolha] = useState({
        delete:{
            header:'Deletar Dispositivo?',
            variant:'danger',
            label:'OK',
            mostraBody:true,
            body:'Tem certeza que deseja deletar o registro?',
            callback: del
        }, 
        edit:{
            header:'Editar Dispositivo?',
            variant:'primary',
            label:'Salvar',
            mostraBody: false,
            callback: ed
           

        }
    })

  
    const [header, setHeader] = useState()
    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [imagem, setImagem] = useState()
    const [id, setId] = useState()
    const [email, setEmail] = useState()
    const [show, setShow] = useState(false)
    const {data} = useApi('/devices')

    const [escolhaAtual, setEscolhaAtual] = useState({
        header: '',
        variant: '',
        label:'',
        body:'',
        id:'',
        email:''
    })

    const manipulaShow = (device, escolhaAtual)=>{
        setEscolhaAtual(escolhaAtual)
        setHeader(header)
        setShow(true)
        setId(device._id)
        setEmail(device.email)
        setNome(device.nome)
        setDescricao(device.descricao)
        setImagem(device.imagem)
    }

    const editRegDevice = (id,data)=>{
        const newRegDevice = {
            nome: data.nome,
            descricao: data.descricao,
            imagem: data.imagem
        }
        editRegistro(id, newRegDevice)
    }



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
                                    <Button variant="info" onClick={()=> manipulaShow(item,escolha.edit)}>Editar</Button>&nbsp;&nbsp;
                                    <Button variant="danger" onClick={()=> manipulaShow(item,escolha.delete)}>Deletar</Button>
                                </td>
                            </tr>)
                    })}
                        
                    </tbody>
                </Table>
               <caixaDialogo show={show} setShow={setShow} escolhaAtual={escolhaAtual} id={id} email={email} > 
                    {escolhaAtual.mostraBody && escolhaAtual.body}
                
                    {!escolhaAtual.mostraBody && (
                        <FormEdit
                        nome={nome}
                        setNome={setNome}
                        id={id}
                        setId={setId}
                        email={email}
                        setEmail={setEmail}
                        descricao={descricao}
                        setDescricao={setDescricao}
                        imagem={imagem}
                        setImagem={setImagem}

                        />
                    )}
               </caixaDialogo>             
    </Container>
  )
}
export default AdmDevice