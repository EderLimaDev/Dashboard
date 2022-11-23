import React from "react";
import styled from 'styled-components'
import ListaDevices from "../componentes/listaDevices";
import {Container, Tabs, Tab} from 'react-bootstrap';
import AdmDevice from "./AdmDevice";
import NovoDevice from "./novoDevice";

const AdminLogo = styled.div`
    background: black;
    color: yellow;
`;


const AdminPage = ()=>{
    return(
       
        <Container>
                <AdminLogo>
                    <h2>Administração da conta</h2>

                </AdminLogo>

                <Tabs defaultActiveKey="profile" id="adm" className="mb-1">
                    <Tab eventKey="devices" title="Meus Dispositivos">
                        <h2>Dispositivos Cadastrados</h2>
                        <ListaDevices />
                    </Tab>
                        
                    <Tab eventKey="Detalhes" title="Detalhes">
                        <AdmDevice />
                    </Tab>

                    <Tab eventKey="Novo" title="Novo Dispositivo">
                        <NovoDevice />
                    </Tab>
                    
        
                </Tabs>

         </Container>

    )

} 

export default AdminPage