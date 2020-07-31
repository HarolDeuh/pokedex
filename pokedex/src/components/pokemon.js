import React, { useState, useEffect } from 'react';

const Pokemon = () => {

    const [pokemons, setPokemon] = useState({})

    const salamecheURL = 'https://pokeapi.co/api/v2/pokemon/?offset=3&limit=3'
    const myWork = "Je suis Designer UX"

    async function fetchData() {
        const res = await fetch(salamecheURL);
        res
            .json()
            .then(res => setPokemon(res))
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            <p>{JSON.stringify(pokemons)}</p>
            <p>{pokemons.name}</p>
        </div>
    );
}

export default Pokemon;