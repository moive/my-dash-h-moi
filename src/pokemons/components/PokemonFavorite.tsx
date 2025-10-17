"use client";

import { useState } from "react";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { NoFavorites } from "./NoFavorites";

export const PokemonFavorite = () => {
  const pokemons = useAppSelector((state) => state.pokemons);
  const pokemonFavorites = Object.values(pokemons);
  const [pokes, setPokes] = useState(pokemonFavorites);
  return <>{pokes.length > 0 ? <PokemonGrid pokemons={pokes} /> : <NoFavorites />}</>;
};
