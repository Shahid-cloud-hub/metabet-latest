import React, { useEffect, useState } from "react";
// import TradedropdownActive from "../../components/RecentTrade/TradedropdownActive";

import Receipt from "../../assets/images/recipt.webp";
import ufc from "../../assets/images/ufc.webp";
import BUSD from "../../assets/images/BUSD.png";
import GOAL from "../../assets/images/GOAL.png";
import Utils, { useAxios } from "../../utilities";
import Loading from "../Loading/Loading";

const TradeAccordian = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [showAccord, setShowAccord] = useState();
  const [allBets, setAllBets] = useState([]);

  const { AllBets, response, loading } = useAxios();

  console.log(response, "tradeAccordian");
  console.log(props?.id, "smart");
  console.log(loading, "loading");

  const getEvent = async () => {
    await AllBets(props?.id);
  };

  useEffect(() => {
    getEvent();
  }, [loading]);

  console.log("res", response);

  // Utils.AllBets(props.id);

  let combineArray = [];

  // allBets[0]?.forEach((item) => combineArray.push(...item));
  // console.log("The mapped array of arrays is: ", combineArray);

  // allBets.forEach((activity) => {
  //   console.log(activity, "foreach");
  // });

  // console.table(activities);

  // const result = allBets[0]?.map((item) => item);

  // console.log("all bet", result);

  const RecentTradeData = [
    {
      id: 1,
      userID: 2,
      time: "02:10 PM",
      odds: "1.20",
      betAmount: "0.00", //"amount.toFixed(2)",
      icon3: BUSD,
      icon4: "https://bscscan.com/images/brandassets/BscScan-logo-circle.png",
      backgroundColor: "#223743",
      border: "8px",
    },
  ];

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        style={{ flexDirection: "column" }}
      >
        {allBets?.length > 1 ? (
          <Loading />
        ) : (
          RecentTradeData.map((item) => (
            <>
              <div
                className="td-item"
                style={{
                  background: item.backgroundColor,
                  borderRadius: item.border,
                }}
              >
                <div className="td-wrapper">
                  <div className="item_1">
                    <span>{item.id}</span>
                  </div>
                  <div className="item_2">
                    <span>{item.userID}</span>
                    <span>{item.time}</span>
                    <span>{item.odds}</span>
                    <div id="betAmount">
                      <span>{item.betAmount}</span>
                      <img src={item.icon3} alt={item.name} />
                    </div>
                    <div id="scan-icon">
                      <img src={item.icon4} alt="icon" width={20} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default TradeAccordian;
