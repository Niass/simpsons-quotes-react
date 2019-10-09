import React from "react";
import Navbar from "./Navbar.js";
import QuoteCard from "./components/QuoteCard.js";
import "./App.css";

class App extends React.Component {
  state = {
    count: 0,
    count2: 0
  };

  // handleClick = () => {
  //   this.setState(
  //     (prevState, prevProps) => {
  //       return { num: prevState.num + prevProps.inc };
  //     },
  //     () => console.log(this.state.num)
  //   );
  // };

  handleClick = arg => {
    const count = this.state[arg];
    this.setState({ [arg]: count + 1 });
  };
  render() {
    const tab = ["Paris", "Strasbourg", "Nice"];

    return (
      <div className="App center medium">
        <Navbar />
        <QuoteCard {...tab} />
        <h1>
          <button className="btn" onClick={() => this.handleClick("count")}>
            Update count
          </button>
        </h1>
        <p>count: {this.state.count}</p>
        <h1>
          <button className="btn" onClick={() => this.handleClick("count2")}>
            Update count2
          </button>
        </h1>

        <p>count2: {this.state.count2}</p>
      </div>
    );
  }
}
export default App;
