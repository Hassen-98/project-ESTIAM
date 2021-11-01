import React from "react";

import {useHistory} from "react-router-dom"

function Pages(){
let history = useHistory();

return(
<div>
<input type="text" />


<input type="text" /><input type="text" /><input type="text" />

<button  onClick={() =>history.push("/Pagep")}>
   Teeest
</button>
</div>


)


}

export default Pages