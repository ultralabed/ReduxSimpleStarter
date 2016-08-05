import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBM60cIHnx43EOeRMxLQfhx9i-s1JpjKwA';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
       this.setState({ vidoes });
      }
    );
  }
  
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));