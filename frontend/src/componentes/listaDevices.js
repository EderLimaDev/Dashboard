import React from "react";
import {Table} from 'react-bootstrap'

const ListaDevices = ()=>{
    return(
        <div>
    <Table striped bordered hover>
            <thead>
                <tr>
                <th>Foto</th>
                <th>Device</th>
                <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><img src='https://a-static.mlcdn.com.br/800x560/geladeira-refrigerador-electrolux-240-litros-1-porta-classe-a-re31/gazinshop/344/20ddae4f611009eccbcab73fea742e3b.jpeg' alt='imagem'/></td>
                    <td>Geladeira</td>
                    <td>20-11-2022</td>
                </tr>
            </tbody>
    </Table>

        </div>
    )

}

export default ListaDevices