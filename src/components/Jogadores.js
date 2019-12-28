import React from 'react';

export default ({index, summonerName, teamId}) => {

    let blueSide = true;

    if(teamId === 100){
        blueSide = false;
    }

    const side = blueSide ? (<span>Time azul</span>) : (<span>Time vermelho</span>);
    
    return (
        <>
            
            <p>Jogador {side}: {summonerName}</p>
        </>
    )
}