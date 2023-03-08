import { React, useState, useEffect } from "react";
import { ContainerBet } from "./BetContainer.styles";
import { useAxios } from "../../hooks/useAxios";
import { betData } from "./BetData";
import { useSelector } from "react-redux";
import Utils from "../../utilities.js";

const BetContainer = (props) => {
  const [bets, setBets] = useState([]);
  const [item, setItem] = useState([]);
  const [tReturned, setTReturned] = useState(0);
  const [betArr, setBetArr] = useState([]);
  const metaMaskAddress = useSelector((state) => state.wallet);

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

  useEffect(() => {
    const check = async (i) => {
      let data = await Utils.AllBets(i);

      return data;
    };
    if (props?.data?.length > 0) {
      let arr = [];
      for (let i = 0; i < props.data.length; i++) {
        const s = check(props.data[i]);
        arr.push(s);
      }

      if (arr?.length > 0) {
        (async () => {
          arr = await Promise.all(arr);
          setBetArr(arr);
        })();
      }
    }
  }, [props?.data?.length]);

  //console.log("first", props.name);

  let eventData = [];
  console.log(betArr);

  const data_3 = betArr?.forEach((j) => {
    if (j[0]?.user == "0x6115a58F27D500511f17c5675c7220266e866199") {
      eventData?.push(j);
    }
  });

  let finallArr = [];
  // let finallArr_1 = [];
  // let finallArr_2 = [];

  eventData?.forEach((x) => x.forEach((y) => finallArr?.push(y)));
  // eventData?.forEach((x) => finallArr?.push(x));
  // finallArr?.forEach((y) => finallArr_1?.push(y));
  // finallArr_1?.forEach((z) => finallArr_2?.push(z));

  // const filter = eventData.forEach((e) => console.log(e.length));
  // const filter = eventData?.length;
  // console.log(bets, "bets");
  // console.log(eventData, "eventData");
  // console.log(finallArr, "finallArr");

  //console.log(arr.forEach((i)=>i.filter((e) => e[0] == "0x6115a58F27D500511f17c5675c7220266e866199")));
  //console.log(arr.filter((e) => e[0] === metaMaskAddress.metaMaskAddress.toString()).length)
  // 0x6115a58f27d500511f17c5675c7220266e866199;
  // if (metaMaskAddress.metaMaskAddress) {
  //   Utils.AllUserBets(metaMaskAddress.metaMaskAddress.toString()).then(
  //     function (data) {
  //       setBets(data);
  //     }
  //   );
  // }

  //console.log(bets)
  //console.log(otherBets)

  const totalBets = (field, value) => {
    const array = props.name == "all" ? bets : finallArr;
    const filter = array.filter((item) => item[field] === value);
    return filter;
  };

  //console.log(totalBets(bets,1, "0x0000000000000000000000000000000000000000"))

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

  // const totalWon = (array) => {
  //   const arr = [];
  //   array.forEach((item) => {
  //     try {
  //       Utils.userStatus(item[0], item[2]).then(function (data) {
  //         arr.push(data);
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });

  //   console.log(arr);
  // };

  return (
    <ContainerBet>
      {betData.map((item, index, arr) => {
        return (
          <>
            {console.log(arr)}
            <div className="betHistory-container">
              <div className="bet-item-1">
                <div>
                  <img src={item.icon1} alt="" />
                </div>
                <div className="table-wrapper">
                  <div className="bet-th">
                    <span>{item.th_1}</span>
                    <span>{item.th_2}</span>
                    <span>{item.th_3}</span>
                    <span>{item.th_4}</span>
                    <span>{item.th_6}</span>
                    <span>{item.th_7}</span>
                    <span>{item.th_5}</span>
                  </div>
                  <div className="bet-td">
                    <span>{item.td_1}</span>
                    <span>
                      {metaMaskAddress.metaMaskAddress == null
                        ? item.td_2
                        : totalBets(1, item.addr).length}
                    </span>
                    <span>{item.td_3}</span>
                    <span>{item.td_4}</span>
                    <span>
                      {metaMaskAddress.metaMaskAddress == null
                        ? item.td_6
                        : totalValue(totalBets(1, item.addr), 3)}
                    </span>
                    <span>
                      {metaMaskAddress.metaMaskAddress == null ||
                      item.addr == ""
                        ? item.td_6
                        : totalReturned(
                            metaMaskAddress.metaMaskAddress.toString(),
                            item.addr
                          )}
                    </span>
                    <img src={item.icon_2} alt="" />
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

export default BetContainer;
