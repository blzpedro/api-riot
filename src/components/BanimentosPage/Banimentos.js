import React from 'react';
import champions from '../static/champions/champions_dictionary.json'

export default ({index, championId}) => {   

    var championName = "Erro"

    champions.champions.map(x => {
        if (x.key == championId) {
            championName = x.champion;
        }
    });

    return (
        <>
            <p>Banimento: {championName}</p>
        </>
    )
}