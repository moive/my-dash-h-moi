import { Metadata } from "next";
import { PokemonFavorite } from "@/pokemons";

export const metadata: Metadata = {
  title: "Favorites Pokemons",
  description: "List of favorites Pokemons",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col p-2">
      <div className="text-5xl mt-3 mb-16">
        Favorites Pokemons <small className="text-blue-500">Global State</small>
      </div>
      <PokemonFavorite />
    </div>
  );
}
