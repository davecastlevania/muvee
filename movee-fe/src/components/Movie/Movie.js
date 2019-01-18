import React from 'react';

import './Movie.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="Movie">
        <div className="Movie-information">
            <h3>{this.props.movie.TitleName}</h3>
            <p>{this.props.movie.ReleaseYear}</p>
          {/*       
          title={movie.TitleName}
          awards={movie.Awards}
          genre={movie.Genre}
          participants={movie.Participants}
          year={movie.ReleaseYear}
          storylines={movie.StoryLines}
        */}
        </div>
      </div>
    );
  }
}

export default Movie;