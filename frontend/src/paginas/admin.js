import React from "react";
import styled from "styled-components";
import {Tabs, Tab} from 'react-bootstrap'

const Descricao = styled.div` 
    flex: 1;
    padding-right: 5rem;
    background: black;
    z-index: 5;
    h1{
        padding-left: 1rem;
        font-weight: bold;
        color: yellow;
    }


`;


const Admin = ()=>{
    return(

        <>
            <Descricao>
                <h1>Area Administrativa</h1>
            </Descricao>
        
    
            <Tabs defaultActiveKey="profile" id="adm" className="mb-3">
                <Tab eventKey="Dispositivos" title="Meus Dispositivos">
                    <h2>Meus Dispositivos</h2>
                </Tab>
                    
                <Tab eventKey="Detalhes" title="Detalhes">
                    <h2>Detalhes</h2>
                </Tab>
        
            </Tabs>

        </>


    )
}

export default Admin