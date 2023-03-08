/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import "./Tab.style.js";
import { Table } from "./Fifa.styles";
import FifaAccordian from "./FifaAccordian";
import { TabContainer } from "./Tab.style.js";
import RecentTrade from "../RecentTrade/RecentTrade";
import ReactPlayer from "react-player/youtube";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

import { useDispatch, useSelector } from "react-redux";

function Tabs(props) {
  let { group, title, id } = useParams();
  const metaMaskAddress = useSelector((state) => state.wallet);
  const { ethereum } = window;

  useEffect(() => {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      signer.getAddress().then(function (data) {
        setCurrentAccount(data);
      });
    }
  }, [metaMaskAddress]);

  const [index, setIndex] = useState(0);
  const prediction_src_1 = props.getPrediction;
  const review_src_1 = props.getReview;
  const prediction_3 = "https://youtu.be/1ObdFaUL7nc";
  const review_3 = "https://youtu.be/1ObdFaUL7nc";

  const pathname = window.location.pathname;
  return (
    <TabContainer>
      <div className="tab-wrapper">
        <div className="tab">
          <div
            className={`tableHead ${index === 0 ? "active" : "de-active"}`}
            onClick={() => {
              setIndex(0);
            }}
          >
            <span>Odds</span>
          </div>
          <div
            className={`tableHead ${index === 1 ? "active" : "de-active"}`}
            onClick={() => {
              setIndex(1);
            }}
          >
            <span>All Bets</span>
          </div>
          <div
            className={`tableHead ${index === 2 ? "active" : "de-active"}`}
            onClick={() => {
              setIndex(2);
            }}
          >
            <span>Live Bets</span>
          </div>
        </div>
      </div>
      <div className="tableContent" hidden={index !== 0}>
        <Table>
          <div className="head">
            <span>CURRENCY</span>
            <span>POOL SIZE</span>
            <span>NUMBER OF BETS</span>
            <span>ODDS</span>
            <span>PAYOUT</span>
            <span>SELECT CURRENCY</span>
          </div>
          <FifaAccordian
            id={props.getId}
            winBtn={props.winId}
            date={props?.eventDate}
            country={props.getName}
            goalT={props.goalT}
            busdT={props.busdT}
            bnbT={props.bnbT}
            eventStatus={props.eventStatus}
            bitAndEth={props.bitAndEthBet}
          />
        </Table>
        {pathname === "/bitcoin" ||
        pathname === "/ethereum" ||
        pathname === "/cricket" ||
        pathname === "/politics" ||
        pathname === "/ufc-events" ? (
          ""
        ) : (
          <div className="video">
            {pathname === "/dxy" ||
              pathname === "/cricket-event" ||
              pathname === `/football/${group}/${title}/${id}/stats` || (
                <div className="prediction">
                  <span>Prediction</span>
                  <div className="video-container-separeted">
                    <ReactPlayer url={prediction_src_1} />
                  </div>
                </div>
              )}

            <div className="prediction">
              <span>Review</span>
              <div className="video-container-separeted">
                <ReactPlayer url={review_src_1} />
              </div>
            </div>
          </div>
        )}
        {pathname === "/bitcoin" ||
        pathname === "/ethereum" ||
        pathname === "/politics" ||
        pathname === "/football/:group/:title/stats/:id" ||
        pathname === "/cricket" ? (
          <div className="video">
            <div className="prediction">
              <span>Prediction</span>
              <div className="video-container-separeted">
                {pathname === "/bitcoin" && (
                  <ReactPlayer url={props.predictionVideo} />
                )}
                {pathname === "/ethereum" && (
                  <ReactPlayer url={props.predictionVideo} />
                )}
                {pathname === "/cricket" && <ReactPlayer url={prediction_3} />}
                {pathname === "/politics" && <ReactPlayer url={prediction_3} />}
              </div>
            </div>
            {pathname === "/bitcoin" && (
              <div className="pie">
                <TradingViewWidget
                  theme={Themes.DARK}
                  locale="en"
                  autosize={true}
                  symbol="BTCUSD"
                  interval="30"
                  timezone="Etc/UTC"
                />
              </div>
            )}
            {pathname === "/ethereum" && (
              <div className="pie">
                <TradingViewWidget
                  theme={Themes.DARK}
                  locale="en"
                  autosize
                  symbol="ETHUSD"
                  interval="30"
                  timezone="Etc/UTC"
                  details={true}
                />
              </div>
            )}
            {pathname === "/bitcoin" || pathname === "/ethereum" ? (
              ""
            ) : (
              <div className="prediction">
                <span>Review</span>
                <div className="video-container-separeted">
                  {pathname === "/cricket" && <ReactPlayer url={review_3} />}
                  {pathname === "/politics" && <ReactPlayer url={review_3} />}
                </div>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="tableContent" hidden={index !== 1}>
        <RecentTrade id={props.getId} />
      </div>
      <div className="tableContent" hidden={index !== 2}>
        <h1>Coming Soon</h1>
      </div>
    </TabContainer>
  );
}

export default Tabs;
