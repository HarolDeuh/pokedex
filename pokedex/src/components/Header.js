import React from 'react'
import Navigation from './navigation'
import '../style/header.scss'

export default function Header() {
    return (
        <header>
            <Navigation />
            <h1>Le pokédex de Harold</h1>
        </header>
    )
}
