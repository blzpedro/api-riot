import React from 'react';
import champions from '../static/champions/champions_dictionary.json'

export default ({index, summonerName, teamId, championId}) => {

    let blueSide = true;

    if(teamId === 100){
        blueSide = false;
    }

    const side = blueSide ? (<span>do time azul</span>) : (<span>do time vermelho</span>);

    console.log(`championId: ${championId}`);
    console.log(`champions length: ${champions.champions.length}`)
    console.log(`champions head: ${champions.champions[0]}, ${champions.champions[2]}, ${champions.champions[3]}`)
    champions.champions.map(x => { if (x.key == championId) console.log(x.champion); })
    var championName = 'not found';
    champions.champions.map(x => {
        if (x.key == championId) {
            console.log(x);
            championName = x.champion;
        }
    });
    
    return (
        <>
            <p>Jogador {side}: {summonerName} <br/> Campeão: {championName}</p>
        </>
    )
}