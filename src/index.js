import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ActiveGame from './components/ActiveGamePage/ActiveGame';
import Perfil from './components/PerfilPage/Perfil';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/active" component={ActiveGame}></Route>
            <Route exact path="/perfil" component={Perfil}></Route>
        </Switch>
    </BrowserRouter>,   
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
