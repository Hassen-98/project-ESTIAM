import "./Sauces.css"

import React from "react"

import data from "../lessauces.json"


function Sauces() {

  const sauces =data





  
 

  const saucesList = sauces.map(sauce => (
    <div>
    
    
    <div key={sauce.id} className="sauce">
    
    
      <img src={sauce.picture} alt="img" />
      <p key={sauce.id}>{sauce.name}</p>
      <button >Ajouter</button>
    
    
      
    </div>
    
    
    </div>
    
        ))
  
  


  return ( <div>
    <header className="title"> <h1>Choix de Sauces</h1></header>
<div className="container">{saucesList} </div>

<button>Précédent</button>
<button>Suivant</button>


</div>











  )

}

export default Sauces