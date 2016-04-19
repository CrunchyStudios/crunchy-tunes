import React from 'react';
import Input from 'react-toolbox/lib/input';
import _ from 'underscore';
import ProgressBar from 'react-toolbox/lib/progress_bar';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: null,
    };
    this.debouncedSearch = _.debounce(this.props.handleSearch, 150);
  }

  handleChange(e) {
    const self = this;
    this.setState({
      searchText: e,
    });
    this.debouncedSearch(e);
  }

  render() {
    return (
    <span className="search-bar form-inline" style={{ display: 'inline-flex' }}>
      <Input type="text" style={{ width: '500px' }} label="Search YouTube, SoundCloud and Spotify!" icon="search"
        onChange={this.handleChange.bind(this)} value ={this.state.searchText} />
      { this.props.searching ? <ProgressBar type='circular' mode='indeterminate' multicolor /> : null}
    </span>
    );
  }
}

export default Search;
