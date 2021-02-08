import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = ({ currentId, onIdChange }) => {
  const [count, setCount] = useState(0);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    axios.get(url).then((res) => {
      setCount(res.data.count);
    });
  }, []);

  useEffect(() => {
    currentId === 1 ? setPrev(false) : setPrev(true);
    currentId === count ? setNext(false) : setNext(true);
  }, [currentId]);

  return (
    <div className="pagination">
      {prev ? (
        <span
          className="pagination__prev"
          onClick={() => onIdChange(currentId - 1)}
        ></span>
      ) : (
        ""
      )}

      <ul className="pagination__numbers">
        <li className="pagination__number">1</li>
        <li className="pagination__dot">...</li>
        <li className="pagination__number">{count}</li>
      </ul>
      <span
        className="pagination__next"
        onClick={() => onIdChange(currentId + 1)}
      ></span>
    </div>
  );
};

export default Pagination;
