import React from 'react'
import styled  from 'styled-components'
import {Container, Tabs, Tab} from "react-bootstrap"
import ListaDevices from '../componentes/admin/ListaDevices';
import AdmDevice from '../componentes/admin/AdmDevice';
import NovoDevice from '../componentes/admin/NovoDevice';




const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: black;
    z-index: 5;
    margin: auto;
    text-align: center;
    border-radius: 12px;

    h1{
        padding-left: 1rem;
        font-weight: bold;
        color: yellow;
       
    }
`;

 const Geral = styled.div`
    h5{
        padding-left: 2rem;
        color: yellow;
        font-weight: bold;
    }
 `;

 const Tabs = styled.div`
    margin: auto;
 
 
 `;

 
const Admin = ()=>{
    return(
        <Geral>
            <Container>
                <Descricao>
                    <h1>
                        Área Administrativa
                    </h1>
                </Descricao>
                
                    <Tabs defaultActiveKey="devices" id="tab1" className="mb-1">
                        <Tab eventKey="devices" title="Meus Devices">
                            <ListaDevices/>
                        </Tab>
                        <Tab eventKey="detalhes" title="Detalhes">
                            <AdmDevice/>
                        </Tab>
                        <Tab eventKey="novo" title="Novo Device">
                             <NovoDevice/>
                        </Tab>
                    </Tabs> 
            </Container>
         
                
           
      </Geral>
    )
}
export default Admin