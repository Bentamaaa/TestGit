import ListeProduititem from "./ListePoduititem"


const ListeProduit = function(props) {
    const {produits} = props

    const produitJSX = produits.map(
        prod => <ListeProduititem
            key={prod.id}
            nom={prod.nom}
            prix={prod.prix}
            promo={prod.promo}>
            
        </ListeProduititem>
    )
    return (
        <div>
            {produitJSX}
        </div>
    )
}

export default ListeProduit