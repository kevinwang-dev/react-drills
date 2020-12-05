import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      words: ["cake", "candle", "juice", "water", "pasta", "butter", "beans"],
    };
  }

  handleChange(value) {
    this.setState({ filterString: value });
  }

  render() {
    let wordsToShow = this.state.words
      .filter((e, i) => {
        return e.includes(this.state.filterString);
      })
      .map((e, i) => {
        return <h2>{e}</h2>;
      });

    return (
      <div className="App">
        <input
          type="text"
          onChange={(e) => {
            this.handleChange(e.target.value);
          }}
        />
        {wordsToShow}
      </div>
    );
  }
}

export default App;
