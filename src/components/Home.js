import React from 'react'
import { apiClient } from '../request'

export default function Home() {

    React.useEffect(() => {
        getTeste();
    }, [])

    async function getTeste(){        
        const url = '/api/users?page=2';

        await apiClient.get(url)
        .then(({ data }) => {
            console.log('data', data.data)
        })
        .catch(error => console.log('Erro ao buscar ', error));
    }

    return (
        <>
            Olá nova página!
        </>
    )
}