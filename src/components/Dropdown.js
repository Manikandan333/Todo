import { useState } from "react";
import ReactDOM from "react-dom";

export default function Dropdown() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
// create a state by using functional component(16.8)
  return (
    <form className="expenses">
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

ReactDOM.render(<Dropdown />, document.getElementById('root'));