import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = ({ currentId, onIdChange }) => {
  const [count, setCount] = useState(0);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    axios.get(url).then((res) => {
      setCount(res.data.count);
    });
  }, []);

  useEffect(() => {
    currentId === 1 ? setPrev(false) : setPrev(true);
    currentId === count ? setNext(false) : setNext(true);
    setPaginationNumber(currentId);
  }, [currentId]);

  function setPaginationNumber(currentId) {
    let items = [];

    for (let index = -4; index <= 4; index++) {
      const key = currentId + index;
      if (key > 0) {
        items.push(
          <li key={key} className="pagination__number">
            <a
              href="#!"
              data-key={key}
              className={key === currentId ? "current" : ""}
              onClick={() => onIdChange(key)}
            >
              {key}
            </a>
          </li>
        );
      }
    }
    setNumbers(items);
  }

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

      <ul className="pagination__numbers">{numbers}</ul>
      {next ? (
        <span
          className="pagination__next"
          onClick={() => onIdChange(currentId + 1)}
        ></span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
