import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    lat: null,
    errorMsg: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  render() {
    const { lat, errorMsg } = this.state;
    if (errorMsg) {
      return <h1>Error: {errorMsg}</h1>;
    }

    if (lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please Accept Location Request" />;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
