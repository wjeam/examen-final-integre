
import React from 'react'

const FetchClientsButton = ({setClients}) => {

    const fetchClients = () => {
        fetch("http://localhost:8080/client/all",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
    }

    return (
        <button onClick={fetchClients}>
            Fetch tous les clients
        </button>
    )
}

export default FetchClientsButton
