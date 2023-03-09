import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Utils from "../../utilities";
import { ContainerBet } from "../ActiveBet/ActiveBet.styles";

const DisplayFilterTab = ({ itemData, smartContractId, getName }) => {
  const [bets, setBets] = useState([]);
  const [item, setItem] = useState([]);
  const [tReturned, setTReturned] = useState(0);
  const [betArr, setBetArr] = useState([]);
  const metaMaskAddress = useSelector((state) => state.wallet);

  console.log("display", smartContractId);

  useEffect(() => {
    // console.log("datas", props?.data);
    if (metaMaskAddress.metaMaskAddress) {
      Utils.AllUserBets(metaMaskAddress.metaMaskAddress.toString()).then(
        function (data) {
          setBets(data);
        }
      );
    }
  }, [metaMaskAddress]);

  // useEffect(() => {
  //   const check = async (i) => {
  //     let data = await Utils.AllBets(i);

  //     return data;
  //   };
  //   if (smartContractId?.length > 0) {
  //     let arr = [];
  //     for (let i = 0; i < smartContractId?.length; i++) {
  //       const s = check(smartContractId?.data[i]);
  //       arr.push(s);
  //     }

  //     if (arr?.length > 0) {
  //       (async () => {
  //         arr = await Promise.all(arr);
  //         setBetArr(arr);
  //       })();
  //     }
  //   }
  // }, [smartContractId?.length]);

  let eventData = [];
  // console.log(betArr, 'array');

  const data_3 = betArr?.forEach((j) => {
    if (
      j[0]?.user.toUpperCase() ==
      metaMaskAddress.metaMaskAddress.toString().toUpperCase()
    ) {
      eventData?.push(j);
    }
  });

  let finallArr = [];

  eventData?.forEach((x) => x.forEach((y) => finallArr?.push(y)));

  const totalBets = (field, value) => {
    const array = getName == "all" ? bets : finallArr;
    const filter = array.filter((item) => item[field] === value);
    return filter;
  };

  const totalValue = (array, field) => {
    let sum = 0;
    array.forEach((item) => (sum += Number(item[field])));
    return sum / 1e18;
  };

  const totalReturned = (user, token) => {
    Utils.getTotalReturned(user, token).then(function (data) {
      setTReturned(Number(data));
    });

    return tReturned;
  };

  return (
    <ContainerBet>
      {itemData?.map((item) => {
        return (
          <>
            <div className="betHistory-container">
              <div className="bet-item-1">
                <div>
                  <img src={item.icon1} alt="" />
                </div>
                <div className="table-wrapper">
                  <div className="bet-th">
                    <span>{item.th_1}</span>
                    <span>{item.th_2}</span>
                  </div>
                  <div className="bet-td">
                    <span>{item.td_1}</span>
                    <span>{item.td_2}</span>
                  </div>
                </div>
                <div className="table-wrapper">
                  <div className="bet-th">
                    <span>{item.th_3}</span>
                    <span>{item.th_4}</span>
                    <span>{item.th_5}</span>
                  </div>
                  <div className="bet-td1">
                    <span>{item.td_3}</span>
                    <img src={item.td_4} alt="" />
                    <span>{item.td_5}</span>
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
