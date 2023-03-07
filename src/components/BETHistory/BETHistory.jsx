import React, { useEffect, useState } from "react";
import { Container } from "./BETHistory.styles";
import BetContainer from "./BetContainer";
import fox from "../../assets/images/Betimg/fox.png";
import { Filter } from "../ActiveBet/ActiveBetData";
import FilterTabBtns from "../FilterTabBtns/FilterTabBtns";
import DisplayFilterTab from "../FilterTabBtns/DisplayFilterTab";
import { useAxios } from "../../hooks/useAxios";

const BetHistory = () => {
  const [getName, setGetName] = useState(null);

  const callback = (name) => {
    setGetName(name);
  };

  let group = "ufc";
  // let title = "trending-event";
  let title = getName;

  console.log("BET History one", getName);

  const { fetchData, response } = useAxios();

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
  }, [group, title]);

  const hightlightData = response?.map(
    (item) => item?.event?.highlights[0]?.stats?.data?.smart_contract_id
  );

  console.log("test", hightlightData);

  const show = response?.length;

  console.log(show, "test");

  return (
    <>
      <Container>
        <div className="history_span">
          <span>BET HISTORY</span>
        </div>
        <div className="filter-btn">
          <FilterTabBtns tabItem={Filter} callback={callback} />
        </div>
        <BetContainer />
        {/* there we have use anonymous function */}
        {/* <button id="history_btn" onClick={() => setShow((prev) => !prev)}> */}
        <button id="history_btn">
          Connect Wallet
          <img src={fox} alt="fox" />
        </button>
        {/* <UfcContainer>
          <div className="Headeline">
            <span>ACTIVE BET's</span>
            <div className="text">
              <span>High/Low</span>
              <span>Live/UpComing</span>
            </div>
          </div>
          {schedule.map((item) => {
            return (
              <>
                <p>{item.date}</p>
                <div className="Time">
                  <p>{item.time}</p>
                  <hr />
                  <div className="WIN">
                    <div id="live">
                      <span>{item.status}</span>
                    </div>
                  </div>
                </div>
                <div className="ScoreBoard">
                  <p>
                    {item.title1}
                    <br />
                    {item.title2}
                  </p>
                  <div className="Board">
                    <div className="Reactanglemini">
                      <div className="Row">
                        <div className="Bid">
                          <div>
                            <img src={item.icon} alt="BUSD" />
                          </div>
                          <span>{item.bid}</span>
                        </div>
                      </div>
                      <div className="Row">
                        <div className="Bid">
                          <span style={{ color: item.color }}>
                            {item.win}
                          </span>
                        </div>
                        {item.id === 1 ? (
                          <button
                            id="claim"
                            style={{ background: item.backgroundColor }}
                          >
                            {item.btn_text}
                          </button>
                        ) : item.id === 3 ? (
                          <button
                            id="claim"
                            style={{ background: item.backgroundColor }}
                          >
                            {item.btn_text}
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div
                      className="Reactangle"
                      style={{ background: item.rectangle_color }}
                    >
                      <p>{item.title1}</p>
                      <div
                        className="score"
                        style={{ background: item.rectangle_color }}
                      >
                        <p>{item.score1}</p>
                        <img
                          src={item.flag1}
                          alt="senegal"
                          width={23}
                          height={23}
                        />
                      </div>
                    </div>
                    <div
                      className="Reactangle"
                      style={{ backgroundColor: item.rectangle_1_color }}
                    >
                      <p>{item.draw}</p>
                      <div
                        className="score"
                        style={{ backgroundColor: item.rectangle_1_color }}
                      >
                        <p>{item.score2}</p>
                      </div>
                    </div>
                    <div className="Reactangle">
                      <p>{item.title2}</p>
                      <div className="score">
                        <p>{item.score3}</p>
                        <img
                          src={item.flag2}
                          alt="england"
                          width={23}
                          height={23}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </UfcContainer> */}

        {/* {show && (
          <UfcContainer>
            <div className="Headeline">
              <img src={betHistory} alt="img" />
              <img src={activeimg} alt="img" />

              <div className="text">
                <span>High/Low</span>
                <span>Live/UpComing</span>
              </div>
            </div>
            {schedule.map((item) => {
              return (
                <>
                  <p>{item.date}</p>
                  <div className="Time">
                    <p>{item.time}</p>
                    <hr />
                    <div className="WIN">
                      <div id="live">
                        <span>{item.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ScoreBoard">
                    <p>
                      {item.title1}
                      <br />
                      {item.title2}
                    </p>
                    <div className="Board">
                      <div className="Reactanglemini">
                        <div className="Row">
                          <div className="Bid">
                            <div>
                              <img src={item.icon} alt="BUSD" />
                            </div>
                            <span>{item.bid}</span>
                          </div>
                        </div>
                        <div className="Row">
                          <div className="Bid">
                            <span style={{ color: item.color }}>
                              {item.win}
                            </span>
                          </div>
                          {item.id === 1 ? (
                            <button
                              id="claim"
                              style={{ background: item.backgroundColor }}
                            >
                              {item.btn_text}
                            </button>
                          ) : item.id === 3 ? (
                            <button
                              id="claim"
                              style={{ background: item.backgroundColor }}
                            >
                              {item.btn_text}
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div
                        className="Reactangle"
                        style={{ background: item.rectangle_color }}
                      >
                        <p>{item.title1}</p>
                        <div
                          className="score"
                          style={{ background: item.rectangle_color }}
                        >
                          <p>{item.score1}</p>
                          <img
                            src={item.flag1}
                            alt="senegal"
                            width={23}
                            height={23}
                          />
                        </div>
                      </div>
                      <div
                        className="Reactangle"
                        style={{ backgroundColor: item.rectangle_1_color }}
                      >
                        <p>{item.draw}</p>
                        <div
                          className="score"
                          style={{ backgroundColor: item.rectangle_1_color }}
                        >
                          <p>{item.score2}</p>
                        </div>
                      </div>
                      <div className="Reactangle">
                        <p>{item.title2}</p>
                        <div className="score">
                          <p>{item.score3}</p>
                          <img
                            src={item.flag2}
                            alt="england"
                            width={23}
                            height={23}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </UfcContainer>
        )} */}

        {/* <Banner /> */}

        {/* <div className="Banner_5">
          <div>
            <div className="Bet">
              <div className="Player">
                <img src={Canelo} alt="Canelo" />
                <p>Canelo Alvarez</p>
              </div>
              <div className="player-VS">
                <span>VS</span>
                <button>
                  <a href="">BET NOW</a>
                </button>
              </div>
              <div className="Player">
                <img src={Gennady} alt="Gennady" />
                <p>Gennady Golovkin</p>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </>
  );
};

export default BetHistory;
