import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {

  }


  render() {
    return (
    <div className="search-bar form-inline">
      <input 
        className="form-control"
        type="text"
        //here, we can implemenent onChange= 
        //this will allow us to implement instant search
          //every time the field changes, the search results update
          />
    </div>
  )
  }


}

export default Search;