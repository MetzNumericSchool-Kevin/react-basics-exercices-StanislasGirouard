import { useState } from "react";
import Boite from "./Boite";
import Bouton from "./bouton";

export default function Exercice4 (){
    const [color, setColor] = useState(["","",""])

    function Red(){
        setColor(["red","",""])
    }
    function Blue(){
        setColor(["blue","blue",""])
    }
    function Green(){
        setColor(["green","green","green"])
    }

    return (
        <section id="exercice4" className="my-5">
            <h2>Les boîtes polycouleurs</h2>

            <Bouton color="btn btn-danger" texte="Change le premier carré en rouge." click={Red}/>
            <Bouton color="btn btn-primary" texte="Change les 2 premiers carré en bleu." click={Blue}/>
            <Bouton color="btn btn-success" texte="Change tous les carré en vert." click={Green}/>

            <div className="row mt-5 gap-5">
                <Boite squareColor={color[0]}/>
                <Boite squareColor={color[1]}/>
                <Boite squareColor={color[2]}/>
            </div>  
      </section>
    );
}