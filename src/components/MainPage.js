import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import "./MainPage.css";
import Header from "../components/Header";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ? (
      <h1 className="tc pa3">Loading</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <ErrorBoundary>
          <CardList robots={this.filterRobots()} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default MainPage;
