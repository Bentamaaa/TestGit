import "./Exo1.css"

const Exo1 = function(props) {

    const {nom,age, agevisible} = props

    return(
        <div>
            <h1 className="nomExo1">Bienvenue {nom} sur l'application React!</h1>
            {
                agevisible ? (
                    <p>Vous avez {age} ans!</p>
                ):(
                    <p>Âge caché</p>
                )
            }

            {
                (age <17)&&(
                    <p>Mineur</p>
                )
            }
            
        </div>
    )

}

Exo1.defaultProps = {
    nom:"inconnu",
    age:18,
    agevisible : true

}
export default Exo1;