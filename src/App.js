import React, { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import axios from "axios";
import Card from "components/Card";
import SearchBox from "components/SearchBox";
import Scroll from "components/Scroll";

function App() {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);
  const [search, setSearch] = useState("");

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
    setSearch(value);
  }, 300);

  useEffect(() => {
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    setFilteredRobots(filteredRobots);
  }, [search, robots]);

  return (
    <div className="tc">
      <h1 className="f1 lh-title mt4 mb3 white">RoboFriends</h1>
      <SearchBox onChange={(e) => onSearchChange(e.target.value)} />
      <Scroll>
        {filteredRobots.map((robot, index) => (
          <Card key={index} {...robot} />
        ))}
      </Scroll>
    </div>
  );
}

export default App;
