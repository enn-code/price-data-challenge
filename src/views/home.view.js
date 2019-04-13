import React from "react";
import DisplayPrices from "../components/prices/display.prices.js";
import ChangePrices from "../components/prices/change.prices.js";
import OccupancyGraph from "../components/data/occupancy.graph.js";

const Home = () => {
  return (
    <div>
      <h1>Smooth Hotel</h1>
      <DisplayPrices />
      <ChangePrices />
      <OccupancyGraph />
    </div>
  );
};

export default Home;
