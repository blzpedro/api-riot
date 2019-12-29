import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <div className="header">
                <Link to='/home'>
                    <a>Home</a>
                </Link>
                <Link to='/contato'>
                    <a>Contato</a>
                </Link>
            </div>
        </>
    )
}