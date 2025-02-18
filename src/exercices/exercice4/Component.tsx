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

        <Bouton color="btn btn-danger" texte="Change le premier carré en rouge." onClick={Red}/>
        <Bouton color="btn btn-primary" texte="Change les 2 premiers carré en bleu." onClick={Blue}/>
        <Bouton color="btn btn-success" texte="Change tous les carré en vert." onClick={Green}/>
        <div className="row mt-5 gap-5">
            <Boite color={color[0]}/>
            <Boite color={color[1]}/>
            <Boite color={color[2]}/>
        </div>
        
      </section>
    )
}