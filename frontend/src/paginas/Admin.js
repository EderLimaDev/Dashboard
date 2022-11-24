import React from 'react'
import styled  from 'styled-components'
import {Container, Tabs, Tab} from "react-bootstrap"
import ListaDevices from '../componentes/admin/ListaDevices';
import AdmDevice from '../componentes/admin/AdmDevice';
import NovoDevice from '../componentes/admin/NovoDevice';
import EstilosGlobais from '../componentes/globalStyles';



const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #0b305e;
    z-index: 5;
    margin: auto;
    text-align: center;
    border-radius: 12px;
    box-shadow: 5px 5px white;
    
    h1{
        font-weight: bold;
        color: yellow;
       
    }
    

`;

 const Geral = styled.div`
    margin: auto;
    padding-top: 2rem;


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
                        <Tabs defaultActiveKey="devices" id="tab1" className="mb-1" >
                            <EstilosGlobais />
                            <Tab eventKey="devices" title="Meus Dispositivos">
                                <ListaDevices/>
                            </Tab>
                            <Tab eventKey="detalhes" title="Editar">
                                <AdmDevice/>
                            </Tab>
                            <Tab eventKey="novo" title="Novo Dispositivo">
                                <NovoDevice/>
                            </Tab>
                        </Tabs> 

            </Container>
         
                
           
      </Geral>
    )
}
export default Admin