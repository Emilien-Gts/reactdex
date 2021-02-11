import React, { useState, useEffect } from "react";
import axios from "axios";
import Stats from "./components/Stats";
import Types from "./components/Types";
import Pagination from "./components/Pagination";
const PokemonPage = () => {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + id;
    axios.get(url).then((res) => {
      const pokemon = {
        id: res.data.id,
        name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
        image: res.data.sprites.other["official-artwork"].front_default,
        types: res.data.types.map((t) => t.type.name),
        stats: res.data.stats.map((s) => [s.stat.name, s.base_stat]),
        height: res.data.height / 10,
        weight: res.data.weight / 10,
      };

      setPokemon(pokemon);
      setBody(pokemon.types[0]);
      setTitle(pokemon.name);
    });
  }, [id]);

  function setBody(t) {
    const body = document.body;
    body.classList = "";
    body.classList.add("body--" + t);
  }

  function setTitle(n) {
    document.title = "ReactDex | " + n;
  }

  function handleIdChange(id) {
    setId(id);
  }

  return (
    <>
      <Pagination currentId={id} onIdChange={handleIdChange} />
      <div className="pokemon">
        <span className="pokemon__id">#{pokemon.id}</span>
        <span className="pokemon__name">{pokemon.name}</span>
        <div className="pokemon__content">
          <div className="pokemon__left">
            <div className="pokemon__more">
              <div className="pokemon__characteristics">
                <span className="pokemon__weight">
                  Weight: {pokemon.weight}kg
                </span>
                <span className="pokemon__height">
                  Height: {pokemon.height}m
                </span>
              </div>
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
          </div>
          <div className="pokemon__right">
            <Types types={pokemon.types} />
            <span className="pokemon__subtitle">Base stats:</span>
            <Stats stats={pokemon.stats} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
