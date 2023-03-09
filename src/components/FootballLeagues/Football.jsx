import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { FootballLeaguesContainer } from "./FootballLeagues.style";
import BetBTN from "../../assets/images/bet-new-btn.png";
import Loading from "../Loading/Loading";

const AllFootballEvents = ({ group_type }) => {
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const title =
    group_type === "champions-league"
      ? "Chanpions League"
      : "" || group_type === "ligue-1"
      ? "Ligue 1"
      : "" || group_type === "laliga"
      ? "La Liga"
      : "" || group_type === "premier-league"
      ? "Premier League"
      : "" || group_type === "serie-a"
      ? "Serie A"
      : "" || group_type === "bundesliga"
      ? "Bundesliga"
      : "" || group_type === "ufc-fight-night"
      ? "UFC Fight Night Events"
      : "" || group_type === "ufc-285"
      ? "UFC 285 Events"
      : "" || group_type === "ufc-286"
      ? "UFC 286 Events"
      : "";

  //   const newTitle = title.replace(/[^a-zA-Z0-9-]/g, "");
  //   const updatedTitle = title.replace(/-/g, " ");

  // console.log("first", title);

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/type/${group_type}`,
    });
  };

  useEffect(() => {
    getEvent();
    window.scrollTo(0, 0);
  }, []);

  const highlightsData = response?.map((item) => item?.event?.highlights[0]);

  // console.log("res", response);
  return (
    <FootballLeaguesContainer>
      <div className="football-loading-wrapper">
        <h1>{title}</h1>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : response?.length > 0 ? (
          <div className="football-league-conainer">
            {loading ? (
              <div className="loading">
                <Loading />
              </div>
            ) : (
              highlightsData?.map((item) => (
                <>
                  <div className="card" key={item._id}>
                    <div className="card__header">
                      <img src={item?.data?.background_img} alt="" />
                    </div>
                    {item?.data?.flag_Img_1 && (
                      <div className="card__body">
                        <div className="card_item">
                          <div className="img_item">
                            <img src={item?.data?.flag_Img_1} alt="" />
                          </div>
                          <span>{item?.data?.flag_name_1}</span>
                        </div>
                        <div className="bet-btn-wrapper">
                          <span>VS</span>
                          <div
                            onClick={() =>
                              navigate(`${pathname}/stats/${item?._id}`, {
                                state: item?._id,
                              })
                            }
                          >
                            <img src={BetBTN} alt="Bet Now" />
                          </div>
                        </div>
                        <div className="card_item">
                          <div className="img_item">
                            <img
                              src={item?.data?.flag_Img_2}
                              alt={item?.data?.flag_name_2}
                            />
                          </div>
                          <span>{item?.data?.flag_name_2}</span>
                        </div>
                      </div>
                    )}
                    {item?.data.player_Img_1 && (
                      <div
                        className="card__body"
                        style={{
                          transform: "translate(55px, 56px)",
                          gap: "61px",
                        }}
                      >
                        <div className="card_item">
                          <div className="img_item">
                            <img
                              src={item?.data?.player_Img_1}
                              alt={item?.data?.player_name_2}
                            />
                          </div>
                        </div>
                        <div className="bet-btn-wrapper">
                          <span>VS</span>
                          <div
                            onClick={() =>
                              navigate(`${pathname}/stats/${item?._id}`, {
                                state: item?._id,
                              })
                            }
                          >
                            <img src={BetBTN} alt="Bet Now" />
                          </div>
                        </div>
                        <div className="card_item">
                          <div className="img_item">
                            <img
                              src={item?.data?.player_Img_2}
                              alt={item?.data?.player_name_1}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ))
            )}
          </div>
        ) : (
          <div className="no-blog-founded">
            <h2>No Event Founded</h2>
          </div>
        )}
      </div>
    </FootballLeaguesContainer>
  );
};

export default AllFootballEvents;
