import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((item) => ({
    id: item.url.split("/").at(-2)!,
    name: item.name,
  }));

  throw new Error("Error al cargar los pokemons");

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="text-5xl mt-3 mb-16">
        List Pokemons <small>Static</small>
      </div>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
