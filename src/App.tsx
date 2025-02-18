import "./App.css";
import Exercice1 from "./exercices/exercice1/Component";
import Exercice2 from "./exercices/exercice2/Component";
import Exercice3 from "./exercices/exercice3/Component";
import Exercice4 from "./exercices/exercice4/Component";

function App() {
  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
      
      <Exercice1 />

      <Exercice2 />

      <h1 className="my-5">Voici quelques objets de ma boutique :</h1>

      <Exercice3 />

      <Exercice4 />
    </div>
  );
}

export default App;
