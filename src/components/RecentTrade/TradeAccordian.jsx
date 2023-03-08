import React, { useEffect, useState } from "react";
// import TradedropdownActive from "../../components/RecentTrade/TradedropdownActive";

import Receipt from "../../assets/images/recipt.webp";
import ufc from "../../assets/images/ufc.webp";
import BUSD from "../../assets/images/BUSD.png";
import GOAL from "../../assets/images/GOAL.png";
import Utils from "../../utilities";
import { result } from "lodash";

const TradeAccordian = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [showAccord, setShowAccord] = useState();
  const [bets, setAllBets] = useState([]);
  const [odd, setOdd] = useState(0);

  // console.log(props.id, "all best");

  useEffect(() => {
    Utils.AllBets(props.id).then(function (data) {
      setAllBets(data);
    });
  }, [props?.id]);

  //console.log("All bets tab", Number(bets[0][0].amount));

  const arr = bets.length > 20 ? bets.slice(0, 20) : bets;

  //bets[0].length -= 4;
  //bets[0].slice(0,8);
  //console.log(bets[0].slice(0,8))

  const formatDate = (seconds) => {
    const s = new Date(seconds * 1000).toLocaleString("en-US");
    return s;
  };

  const checkOdd = (id, result, token) => {
    Utils.currentOdd(id, result, token).then(function (data) {
      setOdd(Number(data));
    });

    return odd;
  };

  //console.log(checkOdd(props.id,"0xac6d8867a466Cd5C017822aB6feE2d670090cbB3", 79000000000000))

  console.log(
    arr.map((item) => {
      console.log(item);
    })
  );
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
        {arr.map((item) => (
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
                  <span>{String(item.eventId).substring(20, -1)}</span>
                </div>
                <div className="item_2">
                  <span>{String(item.user).substring(8, -1)}</span>
                  <span>{formatDate(Number(item.timestamp))}</span>
                  <span>
                    {checkOdd(item.eventId, item.result, item.token).toFixed(2)}
                  </span>
                  <div id="betAmount">
                    <span>{Number(item.amount) / 1e18}</span>
                    <img src={item.icon3} alt={item.name} />
                  </div>
                  <div id="scan-icon">
                    <img src={RecentTradeData[0].icon4} alt="icon" width={20} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TradeAccordian;
