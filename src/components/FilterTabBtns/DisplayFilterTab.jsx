import React from "react";

const DisplayFilterTab = ({ tabItem }) => {
  return (
    <>
      {tabItem.map((item) => {
        return (
          <>
            <button
              style={
                item.id === 1 ? { color: "#FFFFFF" } : { color: "#577184" }
              }
            >
              <img src={item.img} alt={item.name} />
              <span>{item.name}</span>
            </button>
          </>
        );
      })}
    </>
  );
};

export default DisplayFilterTab;
