import React from "react";
import styled from 'styled-components'
import Card from "../componentes/cards";
import { useApi } from "../hooks/useApi";

const ListaCards = styled.div`
    display: grid;
    grid-template-columns: 200px repeat(auto-fill, 200px);
    grid-row-gap: 3rem;
    grid-column-gap: 3rem;
    padding-top: 10px;



`;

const ListaDevices = styled.div`
    min-height: 30vh;
    overflow: hidden;
    padding: 5rem 10rem;


`;

const Medidas = ()=> {
    const { data } = useApi('/devices');
    return (
      
        <ListaDevices>
          <ListaCards>
                {data?.message?.map(projeto => {
                    return (<Card key={projeto._id} projeto={projeto} />);
                })}
            </ListaCards>
        </ListaDevices>
        
    
    );

} 

export default Medidas