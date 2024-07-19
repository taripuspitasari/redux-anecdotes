import {createSlice} from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    voteAnecdote(state, action) {
      return state.map(anecdote =>
        anecdote.id !== action.payload.id ? anecdote : action.payload
      );
    },
    setAnecdote(state, action) {
      return action.payload;
    },
  },
});

export const {createAnecdote, voteAnecdote, setAnecdote} =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
