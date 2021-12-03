import { useState } from "react";
import ReactDOM from "react-dom";

export default function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

ReactDOM.render(<FavoriteColor />, document.getElementById('root'));