import React from 'react';
import champions from '../static/champions/champions_dictionary.json'

export default ({index, summonerName, teamId, championId}) => {

    let blueSide = true;
    var championName = 'Erro';

    if(teamId === 100){
        blueSide = false;
    }

    const side = blueSide ? (<span>do time azul</span>) : (<span>do time vermelho</span>);

    champions.champions.map(x => {
        if (x.key == championId) {
            championName = x.champion;
        }
    });
    
    return (
        <>
            <p>Jogador {side}: {summonerName} <br/> Campeão: {championName}</p>
        </>
    )
}