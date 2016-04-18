import React from 'react';
import Input from 'react-toolbox/lib/input';
import _ from 'underscore';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: null,
    };
    this.debouncedSearch = _.debounce(this.props.handleSearch, 150);
  }

  handleChange(e) {
    this.setState({
      searchText: e,
    });
    this.debouncedSearch(e);
  }

  render() {
    return (
    <div className="search-bar form-inline">
      <Input type="text" label="Search YouTube, SoundCloud and Spotify!" icon="search"
        onChange={this.handleChange.bind(this)} value ={this.state.searchText} />
      <button type="submit">Search</button>
    </div>
    );
  }
}

export default Search;
