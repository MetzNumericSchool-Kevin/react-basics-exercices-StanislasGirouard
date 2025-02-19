export default function Bouton(props){
    function style(){
      props.color
      props.texte
      props.click    
    }

    return (
    <div className="row">
      <div className="col">
        <button onClick={props.click} className={props.color}> {props.texte} </button>
      </div>
    </div>
  );
}