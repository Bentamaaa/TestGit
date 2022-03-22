import "./ListeProduit.css"

const ListeProduititem = function(props) {
    const {nom,prix,promo} = props

    return (    
        <div> 
            <h2>{nom}</h2>
            <p className={promo ? "rouge" : ""}>{prix}</p>
            
        </div>     
    )


}

export default ListeProduititem