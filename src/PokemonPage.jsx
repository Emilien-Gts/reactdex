import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonPage = () => {
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get("");
  }, [id]);

  return <div className="pokemon">Hello</div>;
};

export default PokemonPage;
