import "./App.css";
import Exercice1 from "./exercices/exercice1/Component";
import Exercice2 from "./exercices/exercice2/Component";
import Exercice3 from "./exercices/exercice3/Component";

function App() {
  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
      
      <Exercice1 />

      <Exercice2 />

      <h1 className="my-5">Voici quelques objets de ma boutique :</h1>

      <Exercice3 />

      <section id="exercice4" className="my-5">
        <h2>Les boîtes polycouleurs</h2>

        <div className="row">
          <div className="col">
            <button className="btn btn-danger">
              🪄 Change la première boîte en rouge
            </button>
          </div>
          <div className="col">
            <button className="btn btn-primary">
              🪄 Change les 2 premieres boîtes en bleu
            </button>
          </div>
          <div className="col">
            <button className="btn btn-success">
              🪄 Change toutes les boîtes en vert
            </button>
          </div>
        </div>

        <div className="row mt-5 gap-5">
          <div className="boite"></div>
          <div className="boite"></div>
          <div className="boite"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
