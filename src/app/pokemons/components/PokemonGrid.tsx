import { SimplePokemon } from "../interfaces/simple-pokemon.interface";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((item) => (
        <div key={item.id}>
          <PokemonCard pokemon={item} />
        </div>
      ))}
    </div>
  );
};
