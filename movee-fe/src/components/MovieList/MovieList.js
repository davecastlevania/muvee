import React from 'react';
import { Link } from 'react-router-dom'

import './MovieList.css';

import Movie from '../Movie/Movie';

class MovieList extends React.Component {
  render() {
    return (
      <div className="MovieList">
        {
          this.props.movies.map(movie => {
            return (
              <Link to={{ pathname: `movies/${movie._id}`, state: {movie} }}>
                <Movie movie={movie}
                key={movie.TitleId}
                _id={movie._id}
                />
              </Link>
            ) 
          })
        }
      </div>
    );
  }
}

export default MovieList;