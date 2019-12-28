import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableBody } from '@material-ui/core';
import Jogadores from './Jogadores';
import Banimentos from './Banimentos';

const useStyles = makeStyles(theme => ({
    Box: {
        width: '50%',
        margin: '50px auto 0 auto'  
    },
}));

export default ({ tipoJogo, children }) => {
    const classes = useStyles();

    return(
        <div>
            <div className={classes.Box}>
                <p>Tipo do jogo: {tipoJogo}</p>
                {React.Children.map(children, child => {
                    return child
                })}
            </div>
        </div>
    )
}