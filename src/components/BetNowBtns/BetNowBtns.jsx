import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import {
  andrew,
  betNowData,
  China,
  crap,
  crufts,
  Cryptocurrency,
  Dana,
  DCG,
  DXY,
  ethereum,
  FED,
  Genesis,
  Grayscale,
  Kardashian,
  rain,
  Richest,
  SBF,
  Silvergate,
  Twitter,
  US,
  Volodymyr,
} from "../../JasonData/FeaturedBannerData";
import { Info } from "../Statistics/Stats.syle";

const BetNowBtns = ({ getPath, callback }) => {
  const [addStyle, setAddStyle] = useState();
  let { title, id } = useParams();
  console.log(addStyle, "child");
  const callStyle = (bet_btn_id) => {
    callback(bet_btn_id);
    setAddStyle(bet_btn_id);
  };

  const p_1 = `/trending-event/${title}/statistics/${id}`;

  const getBetBowData = (type) => {
    let betNowData;
    switch (type) {
      case `/trending-event/andrew-tate/statistics/${id}`:
        betNowData = andrew;
        break;
      case `/trending-event/kardashian-sis/statistics/${id}`:
        betNowData = Kardashian;
        break;
      case `/trending-event/fed-raise/statistics/${id}`:
        betNowData = FED;
        break;
      case `/trending-event/crufts/statistics/${id}`:
        betNowData = crufts;
        break;
      case `/trending-event/dxy/statistics/${id}`:
        betNowData = DXY;
        break;
      case `/trending-event/sam-bankman-fried/statistics/${id}`:
        betNowData = SBF;
        break;
      case `/trending-event/cryptocurrency/statistics/${id}`:
        betNowData = Cryptocurrency;
        break;
      case `/trending-event/grayscale/statistics/${id}`:
        betNowData = Grayscale;
        break;
      case `/trending-event/twitter-ceo/statistics/${id}`:
        betNowData = Twitter;
        break;
      case `/trending-event/ethereum-market/statistics/${id}`:
        betNowData = ethereum;
        break;
      case `/trending-event/genesis-file/statistics/${id}`:
        betNowData = Genesis;
        break;
      case `/trending-event/dcg-file/statistics/${id}`:
        betNowData = DCG;
        break;
      case `/trending-event/silvergate-bank/statistics/${id}`:
        betNowData = Silvergate;
        break;
      case `/trending-event/flights-from-china/statistics/${id}`:
        betNowData = China;
        break;
      case `/trending-event/world’s-richest-man/statistics/${id}`:
        betNowData = Richest;
        break;
      case `/trending-event/dana-white/statistics/${id}`:
        betNowData = Dana;
        break;
      case `/trending-event/united-states-default/statistics/${id}`:
        betNowData = US;
        break;
      case `/trending-event/volodymyr-zelensky/statistics/${id}`:
        betNowData = Volodymyr;
        break;
      case `/trending-event/who-will-win/statistics/${id}`:
        betNowData = win;
        break;
      case `/trending-event/wimbledon/statistics/${id}`:
        betNowData = rain;
        break;
      case `/trending-event/crap-fishing/statistics/${id}`:
        betNowData = crap;
        break;
    }
    console.log(betNowData === Kardashian, "jksjkdjsk");
    return {
      betNowData,
    };
  };

  const { betNowData } = getBetBowData(getPath);

  console.log(betNowData, "test");

  return (
    <Info>
      {betNowData?.map((item) => (
        <div className="win_wrapper">
          <div className="WIN" key={item.id}>
            <p> {item.name}</p>
            <button
              onClick={() => callStyle(item.id)}
              style={
                item.id === addStyle
                  ? { background: "#fc4c1e" }
                  : { background: "#7b7b7b" }
              }
            >
              {item.btn}
            </button>
          </div>
          <div>
            {item?.Pool_size && (
              <div className="betStat">
                <div>
                  <span>{item?.Pool_size}</span>
                  <span id="clr">$873782</span>
                </div>
                <div>
                  <span>{item?.bet_number}</span>
                  <span id="clr">36262</span>
                </div>
                <div>
                  <span>{item?.odds}</span>
                  <span id="clr">1.2</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </Info>
  );
};

export default BetNowBtns;
