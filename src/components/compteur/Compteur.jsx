import { useState } from "react";

// création de la variable principale
const Compteur = (props) => {
    // On récupère les props - même si il y'en a qu'un seul
    const {multi} = props

    // on créé un state dont le nombre de départ est 0. Il faut bien utiliser le useState de react
    const [value,setValue] = useState(0);

    // on créé une fonction où le setValue est égale à son ancienne valeur + le props (multi)
    const increm = () => {
            setValue(prevValue => prevValue + multi);

    }

    // on créé une fonction qui met la valeur à 0
    const reset = () => {
        setValue(0);
    }




return (
    // le return n'affiche qu'un seul element JSX il faut donc imbriquer le tout dans une div principale
    <div>
        {/* On voit la valeur actuelle de value */}
        <h1>la valeur est {value}</h1>

        {/* lorsqu'on lcique on utilise la fonction increm. Le props apparait dans le bouton */}
        <button onClick={increm} >+{multi}</button>

        {/* si la valeur est égale à 0 le bouton reset n'apparait pas*/}
        {value === 0 ? "" : <button onClick={reset}>Reset</button>}
        
    </div>
)


}


export default Compteur