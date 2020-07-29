import React from 'react'

const Pokemon = () => {
    const name = "Harold Aholoukpe"

    const componentDidMount = () => {
        const apiURL = "https://pokeapi.co/api/v2/pokemon/pikachu"
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data));
    };

    return (
        <div>
            Je suis {name}
            <div>

            </div>
        </div>
    );
}

export default Pokemon;