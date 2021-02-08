import React from "react";
import Type from "./Type";

const Types = ({ types }) => {
  return (
    <ul className="types">
      {types &&
        Object.entries(types).map((type) => {
          return <Type key={type[1]} type={type[1]} />;
        })}
    </ul>
  );
};

export default Types;
