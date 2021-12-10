
import React from 'react'

const FetchMaleButton = ({setClients}) => {

    const fetchMales = () => {
        fetch("http://localhost:8080/client/male",
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
        <button onClick={fetchMales}>
            Fetch hommes
        </button>
    )
}

export default FetchMaleButton
