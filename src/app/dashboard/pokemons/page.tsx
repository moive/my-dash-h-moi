import Image from "next/image";
import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { relative } from "path";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((item) => ({
    id: item.url.split("/").at(-2)!,
    name: item.name,
  }));
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((item) => (
          <div key={item.id} style={{ width: "100px", height: "100px", position: "relative" }}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
              fill
              style={{ objectFit: "contain" }}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
