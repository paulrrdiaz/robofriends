import React, { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import Card from "components/Card";
import SearchBox from "components/SearchBox";
import ROBOTS from "data/robots";

function App() {
  const [robots, setRobots] = useState(ROBOTS);
  const [search, setSearch] = useState("");

  const onSearchChange = debounce((value) => {
    setSearch(value);
  }, 300);

  useEffect(() => {
    const filteredRobots = ROBOTS.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    search.length ? setRobots(filteredRobots) : setRobots(ROBOTS);
  }, [search]);

  return (
    <div className="tc">
      <h1 className="f-headline mb3 white">RoboFriends</h1>
      <SearchBox onChange={(e) => onSearchChange(e.target.value)} />
      {robots.map((robot, index) => (
        <Card key={index} {...robot} />
      ))}
    </div>
  );
}

export default App;
