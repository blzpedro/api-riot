import React from 'react';

export default ({index, summonerName, teamId}) => {

    let blueSide = true;

    if(teamId === 100){
        blueSide = false;
    }

    const side = blueSide ? (<span>do time azul</span>) : (<span>do time vermelho</span>);
    
    return (
        <>
            <p>Jogador {side}: {summonerName}</p>
        </>
    )
}