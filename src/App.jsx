import {useEffect} from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnectodeList from "./components/AnectodeList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import {setAnecdote} from "./reducers/anecdoteReducer";
import {useDispatch} from "react-redux";
import anecdoteService from "./services/anecdotes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService
      .getAll()
      .then(anecdotes => dispatch(setAnecdote(anecdotes)));
  }, []);

  return (
    <div>
      <Filter />
      <Notification />
      <h2>Anecdotes</h2>
      <AnectodeList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
