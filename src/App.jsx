import {useEffect} from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnectodeList from "./components/AnectodeList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import {initializeAnecdotes} from "./reducers/anecdoteReducer";
import {useDispatch} from "react-redux";
import anecdoteService from "./services/anecdotes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
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
