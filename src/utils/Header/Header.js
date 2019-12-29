import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <div className="header">
                <Link to='/'>
                    <a>Home</a>
                </Link>
                <Link to='/perfil'>
                    <a>Perfil</a>
                </Link>
                <Link to='/active'>
                    <a>Jogo atual</a>
                </Link>
            </div>
        </>
    )
}