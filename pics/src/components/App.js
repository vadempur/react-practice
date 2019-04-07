import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "../components/ImageList";

class App extends React.Component {
  state = { images: [] };
  searchTerm = async e => {
    const response = await unsplash.get("/search/photos", {
      params: { query: e }
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitToTake={this.searchTerm} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
