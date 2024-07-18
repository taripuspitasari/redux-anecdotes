import AnecdoteForm from "./components/AnecdoteForm";
import AnectodeList from "./components/AnectodeList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
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
