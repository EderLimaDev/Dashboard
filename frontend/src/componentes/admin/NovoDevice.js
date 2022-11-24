import React, {useState} from 'react';
import {Form, Container, Button} from 'react-bootstrap'
import styled from 'styled-components'
import { addRegistro } from '../../services/api';

const Geral = styled.div`
h6{
    color: white;
    font-weight:bold;

}

`; 

const NovoDevice = () => {

    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [email, setEmail] = useState()
    const [imagem, setImagem] = useState()

    const data = {nome, descricao, email, imagem}

    function Click(){
        addRegistro(data)
    }


    return (
    <Geral>   
        <Container>
             <Form>
                <Form.Group class="mb-3" controId="email">
                    <Form.Label><h6>Email</h6></Form.Label>
                    <Form.Control
                        type="text" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder='Insira seu Email'/>
                </Form.Group>

                <Form.Group class="mb-3" controId="nome">
                    <Form.Label ><h6>Nome do Dispositivo</h6></Form.Label>
                    <Form.Control
                    type='text' 
                       
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)}
                    placeholder='Escreva o nome do dispositivo'/>
                   
                </Form.Group>

                <Form.Group class="mb-3" controId="descricao">
                    <Form.Label><h6>Descrição</h6></Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows='2'
                    value={descricao}
                    onChange={(e)=> setDescricao(e.target.value)}   
                    placeholder='Insira uma descrição'/>
                   
                </Form.Group>
                <Form.Group class="mb-3" controId="foto">
                    <Form.Label><h6>Foto</h6></Form.Label>
                    <Form.Control 
                    type='text'
                    value={imagem}
                    onChange={(e)=> setImagem(e.target.value)}   
                    placeholder='Insira o link de uma Imagem'/>
                   
                </Form.Group>
              <Button variant="primary" onClick={()=> Click(data.email, data.nome,data.descricao, data.imagem)}>Salvar</Button>&nbsp;&nbsp;
              <Button variant="secondary" type="submit">Cancelar</Button>
    
            </Form>
        </Container>
    </Geral> 
    );
}

export default NovoDevice
