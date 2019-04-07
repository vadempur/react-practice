import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmitTerm(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.formSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
