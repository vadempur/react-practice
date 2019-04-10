import React from "react";
import Songlist from "./Songlist";
import Songdetail from "./Songdetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="row">
        <div className="column eight wide">
          <Songlist />
        </div>
        <div className="column four wide">
          <Songdetail />
        </div>
      </div>
    </div>
  );
};

export default App;
