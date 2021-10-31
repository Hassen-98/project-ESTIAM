import React from "react";

import {useHistory} from "react-router-dom"

function Burger(){
let history = useHistory();

return(
<div>
<header className="title"> <h1>Bienvenue chez nous</h1></header>


<button  onClick={() =>history.push("/sauces")}>
Créer votre commande
</button>
</div>


)


}

export default Burger



