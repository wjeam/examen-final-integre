
import React, { useState } from 'react'
import FetchClientsButton from './FetchClientsButton';
import FetchMaleButton from './FetchMaleButton';
import FetchOntariensButton from './FetchOntariensButton';

const ClientList = () => {

    const [clients, setClients] = useState([]);

    return (
        <div style={{border: "2px solid black"}}>
            <div style={{textAlign: "center"}}>
                <FetchClientsButton setClients={setClients}/>
                <FetchMaleButton setClients={setClients}/>
                <FetchOntariensButton setClients={setClients}/>
            </div>
            <table style={{textAlign: "center", margin: "50px auto 0 auto"}}>
                <tbody>
                {clients.map((client, key) => {
                    return (
                        <tr key={key}>
                            <td style={{width:"100px"}}>{client.id}</td>
                            <td style={{width:"100px"}}>{client.firstName}</td>
                            <td style={{width:"100px"}}>{client.lastName}</td>
                            <td style={{width:"100px"}}>{client.gender}</td>
                            <td style={{width:"100px"}}>{client.birthDate}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}


export default ClientList;
