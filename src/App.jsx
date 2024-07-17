import AnecdoteForm from "./components/AnecdoteForm";
import AnectodeList from "./components/AnectodeList";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnectodeList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
