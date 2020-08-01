import React from 'react'
import Navigation from './navigation'
import '../style/header.scss'

export default function Header() {
    return (
        <header>
            <Navigation />
            <h1>Pokedex</h1>
        </header>
    )
}
