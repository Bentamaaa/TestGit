import "./Welcome.css"

const Welcome = function(props){
    //logique du compostant
    const { name, lastname } = props


    // Rendu du composant
    return(
        <h1 className="bonjour">Bonjour {name} {lastname}</h1>
    )
}

// pour mettre des valeurs par défaut
Welcome.defaultProps = {
    name:"Paul"
}
export default Welcome;