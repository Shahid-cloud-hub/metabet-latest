import React from "react";
import { useEffect } from "react";
import { useAxios } from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { DashContainer } from "./WorldcupLandingPage.styles";
import BetBTN from "../../assets/images/bet-new-btn.png";
import { useNavigate } from "react-router-dom";

const WorldcupLandingPage = () => {
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/group`,
      // url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/ufc/ufc-fight-night/63fef129dc670b46ffaa1128`,
    });
  };

  useEffect(() => {
    getEvent();
  }, []);

  console.log("res", response);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DashContainer>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <div className="card-parent">
          {response?.map((item, index) => (
            <>
              <div className="card" key={index}>
                <img
                  src={item?.event?.banner}
                  alt={item?.event?.title}
                  style={{ width: "90%" }}
                  onClick={() =>
                    navigate(
                      `${item?.group}/${item?.event?.title}/statistics/${item?.event?.highlights[0]?._id}`,
                      {
                        state: item?.event?.highlights[0]?._id,
                      }
                    )
                  }
                />
                {/* <div className="card-btn">
                  <div>
                    <img src={BetBTN} alt="Bet Now" />
                  </div>
                </div> */}
              </div>
            </>
          ))}
        </div>
      )}
    </DashContainer>
  );
};

export default WorldcupLandingPage;
