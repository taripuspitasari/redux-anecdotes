import AnecdoteForm from "./components/AnecdoteForm";
import AnectodeList from "./components/AnectodeList";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <Filter />
      <h2>Anecdotes</h2>
      <AnectodeList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
