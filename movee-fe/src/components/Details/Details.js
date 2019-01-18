import React from 'react';
import { Link } from 'react-router-dom'

import './Details.css';

class Details extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.location.state.movie)
    return (
      <div className="MovieDetails">
        <div className="Detailed-information">
        <Link to="/search">- Back to Search</Link>

          <h3>{ this.props.location.state.movie.TitleName }</h3>
          <p>{ this.props.location.state.movie.ReleaseYear }</p>

          {/* Loop Through Genres */}
          <h5>Genres</h5>

          <ul>
            { this.props.location.state.movie.Genres.map(genre => {
                return(
                    <li className="cast">
                        <span className="member"> {genre}</span>
                    </li>
                )  
            }) }
          </ul>
          <h5>Synopsis</h5>

          <p>{this.props.location.state.movie.Storylines.map(stories => {
            return(
                <li className="cast">
                    <span className="member"> {stories.Description} by <b>{stories.Type}</b></span>
                </li>
            )  
          })}</p>


          <p>
          { this.props.location.state.movie.Awards.map(award => {
            return(
                <li className="cast">
                    <span className="member"> 
                        {award.Award} - {award.AwardCompany} - <b>{award.AwardYear}</b> | 
                        { award.AwardWon == true ? <span><b>Won</b> </span> : <span> Nominated</span>} 
                    </span>
                </li>
            )}
            )}
        </p>

        
          {/* Loop Through And Filter Cast */}

          {/* this.props.location.state.movie.Participants.map(cast => {
            return(
                <li className="cast">
                    <span className="member"> {cast}</span>
                </li>
            )  
          }) */}
          {/*
          <p>{ this.props.location.state.movie.Participants }</p>
          <p>{ this.props.location.state.movie.Awards }</p>
          */}

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

export default Details;