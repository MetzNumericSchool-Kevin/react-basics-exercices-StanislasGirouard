function BoutonAppelArchibald(){

    function quandSorcierRepond(){
        return (
            console.log("🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !")
        )
        
    }
    return (
    <button onClick={quandSorcierRepond} className="btn btn-primary">🛎️ Appeler Archibald</button>
    )
}

export default BoutonAppelArchibald