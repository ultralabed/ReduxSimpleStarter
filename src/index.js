import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBM60cIHnx43EOeRMxLQfhx9i-s1JpjKwA';

// Create a new componet. This compoent should produce
// some HTML.
const App = () => { //a type of component a class
  return (
  <div>
    <SearchBar />
  </div>
  );
}

// Take this component's genrated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));