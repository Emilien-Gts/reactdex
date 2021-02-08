import React from "react";

const Stat = ({ name, value }) => {
  function transformText(s) {
    return s.toString().replace("-", " ").toUpperCase();
  }

  const n = transformText(name);
  const v = transformText(value);

  return (
    <li className="stat">
      <span>
        {n}: {v}
      </span>
    </li>
  );
};

export default Stat;
