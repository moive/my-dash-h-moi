import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

/*
  {
    favorites: {
      "1": { id:1, name: "name1" },
      "2": { id:2, name: "name2" },
      "3": { id:3, name: "name3" },
    }
  }
*/

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

const initialState: PokemonsState = {
  favorites: {},
  // "1": { id: "1", name: "bulbasaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      // debugger;
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      } else {
        state.favorites[id] = pokemon;
      }
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
