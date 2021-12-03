import React from 'react';
import ReactDOM from 'react-dom';

export default function Clickevent() {
  const iphone = () => {
    alert("Great Click!");
  }

  return (
    <button onClick={iphone}>Click it</button>
  );
}

ReactDOM.render(<Clickevent />, document.getElementById('root'));
