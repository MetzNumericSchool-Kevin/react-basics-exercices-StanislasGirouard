import { useState } from "react"

function Miroir() {
    const [hover, setHover] = useState(false);
    const styleMiroir = hover ? {opacity: 1} : {opacity: 0}

    return (
        <div className="card bg-dark border border-warning-subtle miroir">
          <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={styleMiroir} src="aventurier.jpg" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Miroir mon beau miroir</h5>
            <p className="card-text">Quel est mon reflet ?</p>
          </div>
        </div>
    )
}

export default Miroir