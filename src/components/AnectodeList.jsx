import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateAnecdote, deleteOne} from "../reducers/anecdoteReducer";
import {
  setNotification,
  clearNotification,
} from "../reducers/notificationReducer";

const Anecdote = ({anecdote, vote, deleteHandler}) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
        <button onClick={() => deleteHandler(anecdote)}>delete</button>
      </div>
    </div>
  );
};

const AnectodeList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({anecdotes, filter}) =>
    anecdotes
      .filter(anecdote =>
        (anecdote.content || "").toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes)
  );

  const vote = async anecdote => {
    dispatch(updateAnecdote(anecdote));
    dispatch(setNotification(`you voted ${anecdote.content}`));
    setTimeout(() => dispatch(clearNotification()), 3000);
  };

  const deleteHandler = async anecdote => {
    dispatch(deleteOne(anecdote));
    dispatch(setNotification(`you deleted ${anecdote.content}`));
    setTimeout(() => dispatch(clearNotification()), 3000);
  };

  return (
    <div>
      {anecdotes.map(anecdote => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          vote={vote}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};

export default AnectodeList;
