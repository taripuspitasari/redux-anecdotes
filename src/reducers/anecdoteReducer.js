import {createSlice} from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      return state.map(anecdote =>
        anecdote.id !== action.payload.id ? anecdote : action.payload
      );
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdote(state, action) {
      return action.payload;
    },
    deleteAnecdote(state, action) {
      return state.filter(anecdote => anecdote.id !== action.payload);
    },
  },
});

export const {appendAnecdote, voteAnecdote, setAnecdote, deleteAnecdote} =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdote(anecdotes));
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateAnecdote = anecdote => {
  return async dispatch => {
    const changedAnecdote = await anecdoteService.update(anecdote.id);
    dispatch(voteAnecdote(changedAnecdote));
  };
};

export const deleteOne = anecdote => {
  return async dispatch => {
    const deletedAnecdote = await anecdoteService.deleteOne(anecdote.id);
    dispatch(deleteAnecdote(deletedAnecdote.id));
  };
};

export default anecdoteSlice.reducer;
