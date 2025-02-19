export default function BoutonAppelArchibald(props){

    function onClickHandler(){
        props.quandSorcierRepond("🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !")
    }

    return (
    <button onClick={onClickHandler} className="btn btn-primary">🛎️ Appeler Archibald</button>
    );
}

// const AutreComposant = BoutonAppelArchibald;

// const AutreComposantB = function () {

// }

// const AutreComposantC = () => {

// }