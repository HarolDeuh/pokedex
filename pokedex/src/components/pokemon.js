import React, { useState, useEffect } from 'react';

const Pokemon = () => {

    const [pokemons, setPokemons] = useState([])

    const salamecheURL = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

    // async function fetchData() {
    //     const res = await fetch(salamecheURL);
    //     res
    //         .json()
    //         .then(data => {
    //             setPokemons(data)
    //         })
    // }

    useEffect(() => {
        fetch(salamecheURL)
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