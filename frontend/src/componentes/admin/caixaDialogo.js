import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle} from 'react-bootstrap'

function caixaDialogo(show, setShow, escolhaAtual, id, email, children) {
    const acao = ()=>{
        escolhaAtual.callback(id, children[1].props)
        setShow(false)

    }
    return (    
            <Modal
                show={show}
                onHide={()=> setShow(false)}
                >

                <ModalHeader closeButton>
                    <ModalTitle>{escolhaAtual.header}<br/>
                                {id}<br/>
                                {email}<br/>   
                    </ModalTitle>
                </ModalHeader> 

                <ModalBody>
                    {children}
                </ModalBody>

                <ModalFooter>
                    <Button variant={escolhaAtual.variant} onClick={()=> setShow(false)}>Cancelar</Button>
                    <Button variant={escolhaAtual.variant} onClick={()=> acao()}>{escolhaAtual.label}</Button>

                </ModalFooter>
                
            </Modal>
    );
}

export default caixaDialogo;
