import BienvenueAventurier from "./BienvenueAventurier"

export default function Exercice1(){

    return (
        <section id="exercice1" className="my-5">
            <BienvenueAventurier titre="Boutique d'Archibald le Sorcier 🧙‍♂️" />
            <BienvenueAventurier texte="Bienvenue Aventurier, ici vous pouvez acheter divers objets et potions
                magiques pour vos aventures !" />
        </section>
    );
}