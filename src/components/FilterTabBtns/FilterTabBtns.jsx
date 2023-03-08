import React, { useState } from "react";

const FilterTabBtns = ({ tabItem, callback }) => {
  const [check, setCheck] = useState();

  const handle = (nameValue) => {
    let lowerCaseName = nameValue.toLowerCase();

    setCheck(lowerCaseName);
    callback(lowerCaseName);
  };

  // console.log("first", check);
  return (
    <>
      {tabItem.map((item) => {
        return (
          <>
            <button
              onClick={() => handle(item.name)}
              style={
                item.id === 1
                  ? { color: "#FFFFFF", cursor: "pointer" }
                  : { color: "#577184", cursor: "pointer" }
              }
            >
              <img src={item.img} alt={item.name} />
              <span>
                {item.name == "Trending-Event" ? "Trending Events" : item.name}
              </span>
            </button>
          </>
        );
      })}
    </>
  );
};

export default FilterTabBtns;
