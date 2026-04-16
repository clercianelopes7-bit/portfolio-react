import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Kleo Lopes</h1>
        <p>Desenvolvedora em formação</p>
      </header>

      <Sobre />
      <Projetos />

      <footer>
        <p>© 2026 - Kleo Lopes</p>
      </footer>
    </div>
  );
}

export default App; 
// atualização final
