import React, {useState} from "react";

const   Btn= () =>{
const[num, setNum] = useState(1);

const incNum = () =>{

    setNum(num + 1);
};

const decNum = () =>{
if(num>1){
    setNum(num - 1);
}else{
    alert('Oops')
    setNum(0)
}

}
return (

<div>
<div>

<h1>{num}</h1>
<div>
<button onClick={incNum}> Burger + </button>
<button onClick={decNum}>Burger -  </button>
</div>

</div>


</div>


)

}


export default Btn;