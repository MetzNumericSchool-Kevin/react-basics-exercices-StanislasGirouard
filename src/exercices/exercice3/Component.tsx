import Miroir from "./Miroir"

export default function Exercice3 () {
  
    return (
      <>
        <h1 className="my-5">Voici quelques objets de ma boutique :</h1>
        <section id="exercice3" className="my-5 flex self-center">
          <h2>Le miroir de beauté</h2>
          <Miroir />
          <p>Vous avez l'air d'être un aventurier plein de charme dites-moi.</p>
        </section>
      </>
    );
}