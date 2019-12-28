import React from 'react'
import { apiClient } from '../request'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { 
    makeStyles,
} from '@material-ui/core';
import './index.css';
import Jogo from './Jogo';
import Jogadores from './Jogadores';
import Banimentos from './Banimentos';


const useStyles = makeStyles(theme => ({
    Button:{
        padding: '0 16px',
        marginTop: '20px'
    },
    Box:{
        textAlign: "center",
    },
    Title:{
        fontSize: '20px', 
        fontWeight: 'bold',
        textAlign: 'center'
    }
}));

export default function Home() {
    const [nick, setNick] = React.useState('');
    const [encryptedID, setEncryptedID] = React.useState('');
    const [jogadores, setJogadores] = React.useState([]);
    const [bans, setBans] = React.useState([]);
    const [tipoJogo, setTipoJogo] = React.useState('');

    const classes = useStyles();

    async function getIDSummoner(){        
        const url = '/lol/summoner/v4/summoners/by-name/'+nick;

        await apiClient.get(url)
        .then(({ data }) => {
            console.log('summoner', data)
            setEncryptedID(data.id)
        })
        .catch(error => console.log('Erro ao buscar ', error));
    }

    async function getActiveGame(){
        getIDSummoner();
        const url = '/lol/spectator/v4/active-games/by-summoner/'+encryptedID;

        await apiClient.get(url)
        .then(({ data }) => {
            console.log('game', data)
            setJogadores(data.participants)
            setBans(data.bannedChampions)        
            if(data.gameMode === "CLASSIC"){
                setTipoJogo("NORMAL GAME")
            } else{
                setTipoJogo("RANKED GAME")
            }
        })
        .catch(error => console.log('Erro ao buscar ', error));
    }


    return (
        <div className="box">
            <p className={classes.Title}>Veja sua partida ao vivo!</p>
            <div className={classes.Box}>
                <TextField id="standard-basic" label="Digite seu nick" onChange={event => setNick(event.target.value)}/>
                <Button variant="contained" className={classes.Button} color="primary" onClick={getActiveGame}>Buscar</Button>
            </div>
            <Jogo 
                tipoJogo={tipoJogo}>
                {jogadores.length > 0 && jogadores.map(({index, summonerName, teamId}) => (
                    <Jogadores
                        key={index}   
                        summonerName={summonerName}  
                        teamId={teamId}               
                    />
                )) || ''}   
                {bans.length > 0 && bans.map(({index, championId}) => (
                    <Banimentos
                        key={index}
                        championId={championId}
                    />
                )) || ''}
            </Jogo>  
        </div>
    )
}