import React, {FunctionComponent, useEffect, useState} from "react";
import POKEMONS from "./models/mock-pokemon";
import Pokemon from "./models/pokemon";


const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    {pokemons.map((pokemon) => (
                        <div key={pokemon.id} className="col s6 m4">
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={pokemon.picture} alt={pokemon.name}></img>
                                </div>
                                <div className="card-content">
                                    <h5>{pokemon.name}</h5>
                                    <div className="conainer">
                                        {pokemon.types.map((type) => (
                                            <p>{type}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App;
