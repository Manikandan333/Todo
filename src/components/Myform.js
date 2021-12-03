import React from 'react';
import ReactDOM from 'react-dom';


export default function Myform()
{
 const Clickfun=()=>{
     console.log("click twice");
 }

return(
<card className="expenses">
 <label>Enter Name   
<input type="text"/>
</label>
<button onClick={() => {console.log("clicked")}}>Click</button>
<button onClick={Clickfun}>Second click</button>
</card>
    )
}