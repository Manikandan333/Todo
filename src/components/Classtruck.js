import React from 'react';
import ReactDOM from 'react-dom';
import './Expcss.css';

export default class Truck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "volvo",
      model: "EL",
      color: "green ",
      year: 2020
    };
  }
  changeColor = () => {
    this.setState({color:"yellow "});
    
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p className="car des">
          my Truck is {this.state.model} {this.state.color}
          color model {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Truck />, document.getElementById('root'));
