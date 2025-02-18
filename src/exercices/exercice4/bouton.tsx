

function Bouton(props){
    function style(){
        props.color
        props.texte
        props.onClick
        
    }

    return (
    <div className="row">
          <div className="col">
            <button onClick={props.onClick} className={props.color}>
              {props.texte}
            </button>
          </div>
        </div>
    )
}

export default Bouton