import SimpleListItem from "./SimpleListItem";

const SimpleList = function(props) {
    const {pokemons} = props

    const pokemonsJSX = pokemons.map(
        p => <SimpleListItem key={p.id}
            name={p.name}
            type={p.type}
            level={p.type}></SimpleListItem>
    )


    return(
        <div>
            {pokemonsJSX}
        </div>
    )

}


export default SimpleList;