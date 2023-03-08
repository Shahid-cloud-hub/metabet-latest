import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import RegularFootBallBanners from "../Components/RegularFootBall/RegularFootBallBanners";
import { UFCMainBanners } from "../JasonData/UFC";

const UFC = () => {
  const location = useLocation();
  const { pathname } = location;

  const p_1 = "/ufc/ufc-fight-night";
  const p_2 = "/ufc/ufc-285";
  const p_3 = "/ufc/ufc-286";
  return (
    <>
      {location.pathname === !pathname ? (
        UFCMainBanners?.map((item, index) => {
          return (
            <RegularFootBallBanners
              key={index}
              background_img={item?.backgroundImg}
              route_path={item.route_path}
            />
          );
        })
      ) : location.pathname === p_1 ||
        location.pathname === p_2 ||
        location.pathname === p_3 ? (
        <Outlet />
      ) : (
        UFCMainBanners?.map((item, index) => {
          return (
            <RegularFootBallBanners
              key={index}
              background_img={item?.backgroundImg}
              route_path={item.route_path}
            />
          );
        })
      )}
    </>
  );
};

export default UFC;
