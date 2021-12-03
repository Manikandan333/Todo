import react, { useState } from "react";
import reactDom from "react-dom";

export default function Formadd()
{
    const[name]=useState("");
    return(
    <form classname="topnav">
        <label> Add Country :
            <input type="text"/>
        </label>
        <input type="submit"/>
        <button onClick
    </form>

    )
}
reactDom.render(<Formadd/>,document.getElementById('root'));