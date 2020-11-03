import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
  }

  handleChange = (e) => {
    this.state({
      todo: e.target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <form>
          <input
            type="text"
            placeholder="Add Todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
