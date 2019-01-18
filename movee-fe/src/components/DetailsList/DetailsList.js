import React from 'react';

import './DetailsList.css';
import Details from '../Details/Details';

// import Movie from '../Movie/Movie';

class DetailsList extends React.Component {
    constructor(props) {
        super(props);
        
        // this.handleTermChange = this.handleTermChange.bind(this);
        // this.search = this.search.bind(this);
    }

  render() {
    return (
      <div className="DetailsList">
        <Details details={this.props.currentDetails}/>
      </div>
    );
  }
}

export default DetailsList;