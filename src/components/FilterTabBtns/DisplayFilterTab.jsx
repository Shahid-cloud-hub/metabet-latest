import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Utils from "../../utilities";
import { ContainerBet } from "../ActiveBet/ActiveBet.styles";
import MetabetMask from "../../abis/MetabetMask.json";
import {
  BET_ADDRESS
} from "../../constants";

const DisplayFilterTab = ({ itemData, smartContractId, getName }) => {
  const [bets, setBets] = useState([]);
  const [odd, setOdd] = useState(0);
  const [eventName, setEventName] = useState(null);
  const [betArr, setBetArr] = useState([]);
  const metaMaskAddress = useSelector((state) => state.wallet);

  //console.log("display", smartContractId);

  const claim = async (_id, _token) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        let chainId = await ethereum.request({ method: "eth_chainId" });
        console.log("Connecteds to chains " + chainId);

        // String, hex code of the chainId of the bsc test network
        const testnetChainId = "0x61";
        if (chainId !== goerli) {
          alert("You are not connected to the Goerli Network!");
          return;
        } else {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const connectedContract = new ethers.Contract(
            BET_ADDRESS,
            MetabetMask.abi,
            signer
          );

          console.log("yes, Im here up");
          console.log("Going to pop wallet now to pay gas...");

          Txn = await connectedContract.claim(
            [_id],
            _token
          );
          await Txn.wait();
          return;
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const check = async (i) => {
      let data = await Utils.AllBets(i);

      return data;
    };
    if (smartContractId?.length > 0) {
      let arr = [];
      for (let i = 0; i < smartContractId?.length; i++) {
        const s = check(smartContractId[i]);
        arr.push(s);
      }

      if (arr?.length > 0) {
        (async () => {
          arr = await Promise.all(arr);
          setBetArr(arr);
        })();
      }
    }
  }, [smartContractId?.length]);

  let eventData = [];
  //console.log(betArr, 'array');

  const data_3 = betArr?.forEach((j) => {
    eventData?.push(j);
  });

  let finallArr = [];

  eventData?.forEach((x) => {
    //console.log(x, "x"); 
    x.forEach((y) => {
      if(y?.user.toUpperCase() == metaMaskAddress.metaMaskAddress.toString().toUpperCase()){
        finallArr?.push(y)
      }
    }
    )});

  console.log(finallArr, 'array');

  const checkOdd = (id, result, token) => {
    Utils.currentOdd(id, result, token).then(function (data) {
      setOdd(Number(data));
    });
    return odd;
  };

  const getEventName = (id) => {
    Utils.getEventName(id).then(function (data) {
      setEventName(data);
    });

    return [eventName == null ? "" : eventName[0].teamA, eventName == null ? "" : eventName[0].teamB];
  };

  const formatDate = (seconds) => {
    const s = new Date(seconds * 1000).toLocaleDateString("en-US");
    return s;
  };

  console.log(getEventName(finallArr[0]?.eventId), "test");
  //console.log(getEventName(formatDate(1678269850)), "test");
  console.log(checkOdd(finallArr[0]?.eventId, finallArr[0]?.result, finallArr[0]?.token), "test");

  return (
    <ContainerBet>
      {finallArr?.map((item) => {
        return (
          <>
            <div className="betHistory-container">
              <div className="bet-item-1">
                <div>
                  <img src={item.icon1} alt="" />
                </div>
                <div className="table-wrapper">
                  <div className="bet-th">
                    <span>{"Date"}</span>
                    <span>{"Event"}</span>
                  </div>
                  <div className="bet-td">
                    <span>{formatDate(Number(item.timestamp))}</span>
                    <span>{getEventName(item.eventId)[0]+"/"+getEventName(item.eventId)[1]}</span>
                  </div>
                </div>
                <div className="table-wrapper">
                  <div className="bet-th">
                    <span>{"Bet Amount"}</span>
                    <span>{"Blockchain"}</span>
                    <span>{"Current Odds"}</span>
                  </div>
                  <div className="bet-td1">
                    <span>{Number(item.amount)/1e18}</span>
                    <img src={item.td_4} alt="" />
                    <span>{checkOdd(item.eventId, item.result, item.token).toFixed(2)}</span>
                  </div>
                </div>
                <div className="status-btn">
                  <div className="right-pannel">
                    <div>
                      <button>Won</button>
                      <button>Lost</button>
                    </div>
                    <div>
                      <button>All</button>
                      <button>Live</button>
                    </div>
                  </div>
                  <div>
                    <button>Claim</button>
                    <button className="sell">Sell</button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </>
        );
      })}
    </ContainerBet>
  );
};

export default DisplayFilterTab;
