import React from "react";
import Stat from "./Stat";

const Stats = ({ stats }) => {
  return (
    <ul className="stats">
      {stats &&
        Object.entries(stats).map((stat) => {
          return <Stat key={stat[1][0]} name={stat[1][0]} value={stat[1][1]} />;
        })}
    </ul>
  );
};

export default Stats;
