import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: data }) => {
      if (state.some(r => r.id === data.id)) {
        const index = state.findIndex(item => item.id === data.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(data);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const reducer = favoritesSlice.reducer;