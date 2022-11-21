import React from "react";
import styled from 'styled-components'
import ListaDevices from "../componentes/listaDevices";
import {Tabs, Tab} from 'react-bootstrap';

const AdminLogo = styled.div`
    background: black;
    color: yellow;
`;

const Conteiner = styled.div`
    width: 80%;
    padding-top: 2rem;
    margin: auto;
    
`;



const AdminPage = ()=>{
    return(
       
        <Conteiner>
                <AdminLogo>
                    <h2>Administração da conta</h2>

                </AdminLogo>

                <Tabs defaultActiveKey="profile" id="adm" className="mb-3">
                    <Tab eventKey="Dispositivos" title="Meus Dispositivos">
                        <h2>Dispositivos Cadastrados</h2>
                        <ListaDevices />
                    </Tab>
                        
                    <Tab eventKey="Detalhes" title="Detalhes">
                        <h2>Detalhes</h2>
                    </Tab>
            
                </Tabs>

         </Conteiner>

    )

} 

export default AdminPage