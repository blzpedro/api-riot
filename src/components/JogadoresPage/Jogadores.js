import React from 'react';
import champions from '../static/champions/champions.json'

export default ({index, summonerName, teamId, championId}) => {

    let blueSide = true;

    if(teamId === 100){
        blueSide = false;
    }

    const side = blueSide ? (<span>do time azul</span>) : (<span>do time vermelho</span>);

    console.log("champions", champions.data)    

    return (
        <>
            <p>Jogador {side}: {summonerName} <br/> Campeão: {championId}</p>
        </>
    )
}