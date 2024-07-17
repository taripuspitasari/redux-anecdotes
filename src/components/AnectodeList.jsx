import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {voteAnecdote} from "../reducers/anecdoteReducer";

const Anecdote = ({anecdote, vote}) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  );
};

const AnectodeList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(state =>
    [...state].sort((a, b) => b.votes - a.votes)
  );

  const vote = id => {
    dispatch(voteAnecdote(id));
  };

  return (
    <div>
      {anecdotes.map(anecdote => (
        <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} />
      ))}
    </div>
  );
};

export default AnectodeList;
