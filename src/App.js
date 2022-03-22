import './App.css';
import Exo1 from './components/exo1/Exo1';
import SimpleList from './components/simple-list/SimpleList';
import Welcome from './components/welcome/Welcome';
import { nanoid } from "nanoid"
import ListeProduit from './components/exo2/ListeProduit';
import InputComp from './components/input-comp/InputComp';
import Compteur from './components/compteur/Compteur';

function App() {
  
     //ecris ici juste car pas de lien avec l'API - nanoid est une clé unique
    // const produitList = [
    //   {id:nanoid(),nom:"Chocolat",prix: 15,promo:true},
    //   {id:nanoid(),nom:"Fromage",prix: 7,promo:false},
    //   {id:nanoid(),nom:"Oignon",prix: 9,promo:true}
    // ]

    return (
    <div className="App">
      
      {/* <h1 className='main-title'>Mon premier projet React</h1>
      <Welcome name="Jean" lastname="Jacques"></Welcome> */}

      {/* si ce n'est pas des chaines de caractère la valeur doit être entre crochet */}
      {/* <Exo1 nom="Benoît" age={19} agevisible={false}></Exo1> */}
      {/* <SimpleList pokemons={pokemonNames}></SimpleList> */}
      {/* <ListeProduit produits={produitList}></ListeProduit> */}
      <Compteur multi={5}></Compteur>
      <Compteur multi={3}></Compteur>
    </div>
  );
}

export default App;
