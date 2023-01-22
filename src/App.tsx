import React, {FunctionComponent, useState} from "react";
import POKEMONS from "./models/mock-pokemon"
import Pokemon from "./models/pokemon";


const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>(POKEMONS);

    return (
        <h1>Il y a {pokemons.length} de pokemons dans le Pokédex</h1>
    )
}

export default App;
