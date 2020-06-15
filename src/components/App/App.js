import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import { setSearchField, requestRobots } from "store/actions";
import CardList from "components/CardList";
import SearchBox from "components/SearchBox";
import Scroll from "components/Scroll";
import ErrorBoundry from "components/ErrorBoundry";

function App({ searchField, setSearchField, robotsList, requestRobots }) {
  const [filteredRobots, setFilteredRobots] = useState([]);

  useEffect(() => {
    requestRobots();
  }, [requestRobots]);

  const onSearchChange = debounce((value) => {
    setSearchField(value);
  }, 300);

  useEffect(() => {
    const filteredRobots = robotsList.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    setFilteredRobots(filteredRobots);
  }, [searchField, robotsList]);

  return (
    <div className="tc">
      <h1 className="f1 lh-title mt4 mb3 white">RoboFriends</h1>
      <SearchBox onChange={(e) => onSearchChange(e.target.value)} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

const mapStateToProps = ({ robots: { searchField, robotsList } }) => ({
  searchField,
  robotsList,
});

export default connect(mapStateToProps, {
  setSearchField,
  requestRobots,
})(App);
