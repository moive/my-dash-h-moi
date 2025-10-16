import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";

/*
  {
    "1": { id:1, name: "name1" },
    "2": { id:2, name: "name2" },
    "3": { id:3, name: "name3" },
  }
*/

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  "1": { id: "1", name: "bulbasaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
