import React, { useEffect, useState } from "react";
import { Container } from "./ActiveBet.styles";
import { Filter } from "./ActiveBetData";
import FilterTabBtns from "../FilterTabBtns/FilterTabBtns";
import DisplayFilterTab from "../FilterTabBtns/DisplayFilterTab";
import { useAxios } from "../../hooks/useAxios";

const ActiveBetHistory = () => {
  const [itemData, setItemData] = useState(Filter);
  const [getName, setGetName] = useState("all");
  const { fetchData, response } = useAxios();

  const uniqueNames = [...new Set(Filter.map((item) => item.name))];
  const menuItems = uniqueNames.map((nameObj) => {
    const filterItem = Filter.find((item) => item.name == nameObj);
    const imgV = filterItem ? filterItem.img : null;
    return { name: nameObj, imgV };
  });

  const filterItem = (curcat) => {
    const newItem = Filter.filter((newVal) => {
      return newVal.name === curcat;
    });
    setItemData(newItem);
  };

  const callbackName = (name) => {
    setGetName(name);
  };

  let title = getName;

  if (getName === "all") {
    const getAllEvents = async () => {
      await fetchData({
        method: "GET",
        // url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/${title}`,
        url: `https://dull-puce-wildebeest-belt.cyclic.app/group`,
      });
    };

    useEffect(() => {
      getAllEvents();
      window.scrollTo(0, 0);
    }, [title]);
  } else {
    const getBanners = async () => {
      await fetchData({
        method: "GET",
        url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/${title}`,
        // url: `https://dull-puce-wildebeest-belt.cyclic.app/group`,
      });
    };
    useEffect(() => {
      getBanners();
      window.scrollTo(0, 0);
    }, [title]);
  }

  const hightlightData = response?.map(
    (item) => item?.event?.highlights[0]?.stats?.data?.smart_contract_id
  );

  const arrData =
    hightlightData == undefined ? [] : Object.values(hightlightData);

  // console.log("get name from child", arrData);
  return (
    <>
      <Container>
        <div className="history_span">
          <span>MY Active Bets</span>
        </div>
        <div className="filter-btn">
          <FilterTabBtns
            filterItem={filterItem}
            setItemData={setItemData}
            menuItems={menuItems}
            callbackName={callbackName}
            activeBet={true}
          />
        </div>
        <DisplayFilterTab
          itemData={itemData}
          smartContractId={arrData}
          getName={getName}
        />
      </Container>
    </>
  );
};

export default ActiveBetHistory;
