import React, { useState } from "react";
import { Filter } from "../ActiveBet/ActiveBetData";
import foxCircle from "../../assets/images/foxCircle.webp";

const FilterTabBtns = ({
  filterItem,
  setItemData,
  menuItems,
  tabItem,
  callback,
  callbackName,
  betHis,
  activeBet,
}) => {
  const [check, setCheck] = useState();

  const uName = [...new Set(tabItem?.map((item) => item.name))];
  const tabItem1 = uName?.map((nameObjs) => {
    const filterItem = tabItem.find((item) => item.name == nameObjs);
    const imgV = filterItem ? filterItem.img : null;
    return { name: nameObjs, imgV };
  });

  const handle = (nameValue) => {
    let lowerCaseName = nameValue?.toLowerCase();

    setCheck(lowerCaseName);
    callback(lowerCaseName);
  };

  const getTabName = (name, data) => {
    let lowerCaseName = name?.toLowerCase();

    filterItem(name);
    setCheck(lowerCaseName);
    callbackName(lowerCaseName);

    if (name === "All") {
      setItemData(data);
    }
  };

  return (
    <>
      {betHis &&
        tabItem1.map((item) => {
          return (
            <>
              <button
                onClick={() => handle(item?.name)}
                style={
                  item?.name.toLowerCase() === check
                    ? { color: "#fff" }
                    : { color: "#577184" }
                }
              >
                <img src={item?.imgV} alt={item?.name} />
                <span>
                  {item?.name == "Trending-Event"
                    ? "Trending Events"
                    : item?.name}
                </span>
              </button>
            </>
          );
        })}
      {activeBet &&
        menuItems?.map((Val, id) => {
          return (
            <button
              onClick={() => getTabName(Val?.name, Filter)}
              key={id}
              style={{ cursor: "pointer" }}
            >
              <img src={Val?.imgV} alt={Val?.name} />
              <span
                style={
                  Val?.name.toLowerCase() === check
                    ? { color: "#fff" }
                    : { color: "#577184" }
                }
              >
                {Val?.name == "Trending-Event" ? "Trending Events" : Val?.name}
              </span>
            </button>
          );
        })}
    </>
  );
};

export default FilterTabBtns;
