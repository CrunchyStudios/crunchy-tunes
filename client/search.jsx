import React from 'react';
import Input from 'react-toolbox/lib/input';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: null,
    };
  }

  handleChange(e) {
    this.setState({
      searchText: e,
    });
    this.props.handleSearch(e);
  }

  render() {
    return (
    <div className="search-bar form-inline">
      <Input type='text' label='Search YouTube, SoundCloud and Spotify!' icon='search'
      onChange={this.handleChange.bind(this)} value ={this.state.searchText}  />
      <button type="submit">Search</button>
    </div>
    );
  }
}

export default Search;
