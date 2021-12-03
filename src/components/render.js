import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}
//life cycle

ReactDOM.render(<Header />, document.getElementById('root'));