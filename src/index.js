import React from 'react';
import ReactDOM from 'react-dom';
// Create a new componet. This compoent should produce
// some HTML.
const App = () => { //a type of component a class
  return <div>Hi!</div>;
}

// Take this component's genrated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
