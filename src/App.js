require("@babel/polyfill");

import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Results from "./components/Results";
import axios from "axios";
import Details from "./components/Details";

class App extends React.Component {
  state = {
    details: {},
    username: "",
    users: [],
    total: 0,
    links: {},
    open: false
  };
  handleOpen = async url => {
    const details = await axios.get(url).then(details => details.data);
    this.setState({
      details,
      open: true
    });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  getUsers = async url => {
    if (this.state.username) {
      const result = await axios.get(url);
      this.setState({
        users: result.data.items,
        total: result.data.total_count,
        links: this.parseLinks(result.headers.link)
      });
    }
  };
  parseLinks = header => {
    if (!header) {
      return {};
    }
    const parts = header.split(",");
    const links = {};
    parts.forEach(part => {
      const section = part.split(";");
      const url = section[0].replace(/<(.*)>/, "$1").trim();
      const name = section[1].replace(/rel="(.*)"/, "$1").trim();
      links[name] = url;
    });
    return links;
  };
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    return (
      <div>
        <Header
          handleUsernameChange={this.handleUsernameChange}
          getUsers={this.getUsers}
          {...this.state}
        />
        <Results
          getUsers={this.getUsers}
          handleOpen={this.handleOpen}
          {...this.state}
        />
        <Details
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          {...this.state}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
