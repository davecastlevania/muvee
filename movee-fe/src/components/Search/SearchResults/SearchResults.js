import React from 'react';

import './SearchResults.css';

import MovieList from '../../MovieList/MovieList';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <MovieList movies={this.props.searchResults} onAdd={this.props.onAdd} />
      </div>
    );
  }
}

export default SearchResults;