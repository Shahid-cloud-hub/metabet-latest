import React from "react";
import { NavLink } from "react-router-dom";
import { RegularFootBallContainer } from "./RegularFoot.style";

const RegularFootBallBanners = (props) => {
  console.log("first", props);
  return (
    <>
      <NavLink to={props.route_path}>
        <RegularFootBallContainer
          background={props.background_img}
        ></RegularFootBallContainer>
      </NavLink>
    </>
  );
};

export default RegularFootBallBanners;
