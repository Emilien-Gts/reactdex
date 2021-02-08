import React, { useState, useEffect } from "react";

const Type = ({ type }) => {
  const [typeClass, setTypeClass] = useState("");

  useEffect(() => {
    setTypeClass("type type--" + type);
  });

  const t = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <li className={typeClass}>
      <p className="type__name">{t}</p>
    </li>
  );
};

export default Type;
