import React, { useState, useEffect } from 'react';

const Pokemon = () => {

    const [pokemons, setPokemons] = useState([])

    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=5'

    useEffect(() => {
        fetch(pokemonUrl)
            .then(response => response.json())
            .then(data => {
                setPokemons(data.results)
            })
    }, [])

    return (
        <div>
            {pokemons.map(item => (
                <p>{item.name}</p>
            ))}
        </div>
    );
}

export default Pokemon;