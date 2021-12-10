
import React from 'react'

const FetchOntariensButton = ({setClients}) => {

    const fetchOntariens = () => {
        fetch("http://localhost:8080/client/ontarien",
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
            setClients(data);
        })
    }


    return (
        <button onClick={fetchOntariens}>
            Fetch ontariens
        </button>
    )
}

export default FetchOntariensButton
