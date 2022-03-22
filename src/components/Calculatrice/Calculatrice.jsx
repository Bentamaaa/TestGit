import { useState } from "react"

const Calculatrice= (props) => {
    
    // création des states
    const [nbA,setNba] = useState("") 
    const [choix,setChoix] = useState("+")
    const [nbB, setNbB ] = useState("")
    const [rep,setRep] = useState("")
    
    // empeche de créer les evenements par defaut du submit
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // fonction qui va calculer en fonction du "choix"
    const resultat = function () {
        switch(choix){
            case "+":
                // il faut parseInt sinon 2+2 = 22
                setRep(parseInt(nbA) + parseInt(nbB))
                break
            case "-":
                setRep(nbA - nbB)
                break
            case "x":
                setRep(nbA * nbB)
                break
            case ":":
                setRep(nbA / nbB)
                break
                
            }
    }

    return(
        // on applique la fonction handlesubmit
        <form onSubmit={handleSubmit}>
            {/* création de l'input qui synchronise avec la state nbA setNba */}
            <input id="a" name="a" type="text" value={nbA} onChange={(e) => setNba(e.target.value)}/>

            {/* Création du select qui synchronise avec la state choix SetChoix */}
            <select value={choix} onChange={(e) => setChoix(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="x">x</option>
                <option value=":">:</option>
            </select>

            {/* création de l'input qui synchronise avec la state nbB setNbB */}
            <input id="b" name="b" type="text" value={nbB} onChange={(e) => setNbB(e.target.value)}/>
            
            {/* Boutton qui effectue la fonction resultat lors du clique */}
            <button onClick={resultat}>Calculer</button>

            {/* Si la réponse est autre que 0, fait apparaître la réponse dans un inpute txt en lecture seulement */}
            {rep > 0 &&
            <div>
                <input type="text" value={rep} readOnly/>
                <h2>{nbA}{choix}{nbB} = {rep}</h2>
            </div>
            }
        </form>
    )
}

export default Calculatrice 