import React from 'react'
import "../style/nav.scss"

export default function Navigation() {
    return (
        <nav className="navigation-bar">
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Pokemon</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
