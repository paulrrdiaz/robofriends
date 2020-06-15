import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import axios from "axios";
import { setSearchField } from "store/actions";
import CardList from "components/CardList";
import SearchBox from "components/SearchBox";
import Scroll from "components/Scroll";
import ErrorBoundry from "components/ErrorBoundry";

function App({ searchField, setSearchField }) {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);

  const fetchRobots = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setRobots(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRobots();
  }, []);

  const onSearchChange = debounce((value) => {
    setSearchField(value);
  }, 300);

  useEffect(() => {
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    setFilteredRobots(filteredRobots);
  }, [searchField, robots]);

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

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
});

export default connect(mapStateToProps, {
  setSearchField,
})(App);
