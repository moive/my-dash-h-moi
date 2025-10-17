"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const PokemonFavorite = () => {
  const pokemons = useAppSelector((state) => state.pokemons);
  const pokemonFavorites = Object.values(pokemons);
  return <PokemonGrid pokemons={pokemonFavorites} />;
};
