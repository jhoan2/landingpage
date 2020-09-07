import React from 'react'
import './header.css'
import { ButtonBase } from '@material-ui/core';

export default function Header() {
    return (
        <div>
            <div className ='container'> 
                <div className='hero-text'>
                    <h1 className='hero'>City Life</h1>
                    <p className='paragraph'>Click to see what's cool about these cities</p>
                </div>
                <div>
                </div> 
            </div>
        </div>
    )
}
