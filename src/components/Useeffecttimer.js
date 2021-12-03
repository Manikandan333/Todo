
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Useeffecttimer() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    setCalculation((count) => count * 2);
     }, [count]);
  });

  return
  <div>
   <h1>I have useffect timer {count} times!</h1>;
  <button onClick={() => setCount((c) => c + 1)}>+</button>
  <p>Calculation: {calculation}</p>
  </div>
}

ReactDOM.render(<Useeffecttimer />, document.getElementById('root'));