import React from 'react';
import {Form, FormGroup, Container} from 'react-bootstrap'

const FormEdit = ({nome, setNome, descricao, setDescricao, imagem, setImagem}) => {
    return (
        <Container>
            <Form>
                <FormGroup class="mb-3">
                    <Form.Label for="exampleInputEmail1" class="form-label">Nome do Dispositivo</Form.Label>
                    <Form.Control
                        type="text" 
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                        placeholder='Entre com um nome para o dispositivo'/>
                </FormGroup>

                <FormGroup class="mb-3">
                    <Form.Label for="exampleInputEmail1" class="form-label">Descrição</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows='2'   
                    value={descricao}
                    onChange={(e)=> setDescricao(e.target.value)}
                    placeholder='descreva o uso do seu dispositivo'/>
                   
                </FormGroup>

                <FormGroup class="mb-3">
                    <Form.Label for="exampleInputEmail1" class="form-label">Foto</Form.Label>
                    <Form.Control 
                    type='text'
                    value={imagem}
                    onChange={(e)=> setImagem(e.target.value)}   
                    placeholder='Insira um link de uma imagem para seu Dispositivo'/>
                   
                </FormGroup>
              
              
    
            </Form>
        </Container>
    );
}

export default FormEdit;
