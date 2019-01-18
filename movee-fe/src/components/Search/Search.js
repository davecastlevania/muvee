import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar'
import Movies from '../../util/Movies'
import SearchResults from './SearchResults/SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      currentDetails: []
    };

    this.search = this.search.bind(this)
    this.updateDetails = this.search.bind(this)

  }

  search(term) {
    // Make a Connection to Mongo Backend
    Movies.search(term).then(searchResults => {
      console.log(searchResults);
      this.setState({searchResults: searchResults});
    });

  }


  render() {

    return (
      <div>
        <SearchBar onSearch={this.search} />
        <SearchResults searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default Search;
