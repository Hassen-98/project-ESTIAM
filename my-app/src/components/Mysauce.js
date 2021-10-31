import "./Sauces.css"

import React from "react"





function Myauce(props) {

  const { sauce, addSauce } = props





  
 //deleteSauce = id => {
  //const { sauces } = this.state
  //const myNewsauce = sauces.filter(sauce => sauce.id !== id)
 // this.setState({ sauces: myNewsauce })
//}


//import MySauce from "./mySauce"



    //const mySauce = newSauce.map((sauce) => 
    //<div key={sauce.id} className="sauce">
      
      
    //<img  src={sauce.picture} alt="img" />
    //<p >{sauce.name}</p>
   // <button   >Supprimer</button>
  
  
  
  //</div>
    
    
    //)
  
  


  //onClick={() => addSauce(sauce.id)}
  // <MySauce />



  //onClick={() => addSauce(sauce.id)}
  // <MySauce />


  return ( 








<div key={sauce.id} className="sauce">


  <img src={sauce.picture} alt="img" />
  <p key={sauce.id}>{sauce.name}</p>
  <button >Supprimer</button>


  
</div>













  )

//deleteSauce = id => {
  //const { sauces } = this.state
  //const myNewsauce = sauces.filter(sauce => sauce.id !== id)
 // this.setState({ sauces: myNewsauce })
//}


}

export default Myauce