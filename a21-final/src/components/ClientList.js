
import React, { useState } from 'react'
import FetchClientsButton from './FetchClientsButton';
import FetchMaleButton from './FetchMaleButton';
import FetchOntariensButton from './FetchOntariensButton';

const ClientList = () => {

    const [clients, setClients] = useState([]);

    return (
        <>
            <div style={{textAlign: "center"}}>
                <FetchClientsButton setClients={setClients}/>
                <FetchMaleButton setClients={setClients}/>
                <FetchOntariensButton setClients={setClients}/>
            </div>
            <table>
                {clients.map((client) => {
                    return (
                        <tr>
                            <td>{client.id}</td>
                            <td>$100</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}


export default ClientList;
